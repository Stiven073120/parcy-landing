"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/*
  Malla de triángulos del hero. Tres formatos:
  - "scatter": triángulos sueltos de distintos tamaños, unos rellenos y otros
    solo contorno, girados al azar (el formato por defecto).
  - "lowpoly": retícula con vértices desplazados → facetas irregulares con
    sombreado plano, como un cristal.
  - "lattice": retícula equilátera regular con relieve en degradado.

  En todos: solo azules, se vuelven transparentes a lo largo de la diagonal
  desde la esquina superior izquierda, respiran con un brillo lento y
  reaccionan al cursor (se apartan, crecen y se aclaran). La reacción se aplica
  directamente sobre el DOM para no re-renderizar cientos de nodos por frame.
*/

const VW = 1000;
const VH = 900;
const S = 54; // lado base de cada triángulo (unidades del viewBox)
const HH = S * 0.866; // altura de un triángulo equilátero
const RADIUS = 150; // alcance del cursor en unidades del viewBox

export type MeshVariant = "scatter" | "lowpoly" | "lattice";

// Pseudoaleatorio determinista (misma malla en servidor y cliente)
const rnd = (i: number, j: number, k = 0) => {
  const x = Math.sin(i * 127.1 + j * 311.7 + k * 74.7) * 43758.5453;
  return x - Math.floor(x);
};
const r3 = (n: number) => Math.round(n * 1000) / 1000;

const POLY_COLORS = [
  "var(--color-brand-200)",
  "var(--color-brand-300)",
  "var(--color-brand-400)",
  "var(--color-brand-500)",
  "var(--color-brand-600)",
  "var(--color-brand-700)",
];

type Pt = { x: number; y: number };
type Facet = {
  key: number;
  points: string;
  cx: number;
  cy: number;
  base: number;
  dist: number;
  fill: string;
  stroke: string;
  sw: number;
};

const fade = (cx: number, cy: number) => (cx / VW + cy / VH) / 2;
const toPoints = (p: Pt[]) => p.map((q) => q.x.toFixed(1) + "," + q.y.toFixed(1)).join(" ");

function buildLattice(variant: "lowpoly" | "lattice"): Facet[] {
  const jitter = variant === "lowpoly" ? 0.42 : 0;
  const P = (i: number, j: number): Pt => ({
    x: j * S + (i * S) / 2 + (rnd(i, j, 1) - 0.5) * S * jitter,
    y: i * HH + (rnd(i, j, 2) - 0.5) * HH * jitter,
  });
  const rows = Math.ceil(VH / HH) + 1;
  const out: Facet[] = [];
  let key = 0;
  for (let i = 0; i < rows; i++) {
    const jStart = -Math.ceil(i / 2) - 1;
    const jEnd = Math.ceil(VW / S) + 1;
    for (let j = jStart; j < jEnd; j++) {
      const a = P(i, j);
      const b = P(i, j + 1);
      const c = P(i + 1, j);
      const d = P(i + 1, j + 1);
      const tris: { p: Pt[]; up: boolean }[] = [
        { p: [a, b, c], up: true },
        { p: [b, d, c], up: false },
      ];
      for (const t of tris) {
        const cx = (t.p[0].x + t.p[1].x + t.p[2].x) / 3;
        const cy = (t.p[0].y + t.p[1].y + t.p[2].y) / 3;
        if (cx < -S || cx > VW + S || cy > VH + S) continue;
        const dist = fade(cx, cy);
        const base = Math.max(0, (t.up ? 0.6 : 0.48) - dist * 1.35);
        if (base <= 0.012) continue;
        const shade = rnd(i, j, t.up ? 3 : 4);
        const idx = Math.min(POLY_COLORS.length - 1, Math.floor(shade * shade * POLY_COLORS.length * (1 - dist * 0.6)));
        out.push({
          key: key++,
          points: toPoints(t.p),
          cx,
          cy,
          base: r3(variant === "lowpoly" ? Math.min(1, base * 1.25) : base),
          dist,
          fill: variant === "lowpoly" ? POLY_COLORS[idx] : t.up ? "url(#facet-up)" : "url(#facet-down)",
          stroke: variant === "lowpoly" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.85)",
          sw: variant === "lowpoly" ? 0.8 : 1,
        });
      }
    }
  }
  return out;
}

function buildScatter(): Facet[] {
  const out: Facet[] = [];
  const COUNT = 110;
  for (let k = 0; k < COUNT; k++) {
    const cx = rnd(k, 1, 7) * VW;
    const cy = rnd(k, 2, 7) * VH;
    const dist = fade(cx, cy);
    if (dist > 0.52) continue;
    const size = 16 + rnd(k, 3, 7) ** 2 * 120; // mayoría pequeños, algunos grandes
    const rot = rnd(k, 4, 7) * Math.PI * 2;
    const filled = rnd(k, 5, 7) > 0.42;
    const p: Pt[] = [0, 1, 2].map((v) => {
      const ang = rot + (v * Math.PI * 2) / 3;
      return { x: cx + Math.cos(ang) * size * 0.58, y: cy + Math.sin(ang) * size * 0.58 };
    });
    const base = Math.max(0, 0.75 - dist * 1.35);
    if (base <= 0.02) continue;
    const shade = Math.floor(rnd(k, 6, 7) * 4) + 1; // brand-300..600
    out.push({
      key: k,
      points: toPoints(p),
      cx,
      cy,
      base: r3(base),
      dist,
      fill: filled ? POLY_COLORS[shade] : "none",
      stroke: filled ? "rgba(255,255,255,0.6)" : POLY_COLORS[Math.min(shade + 1, 5)],
      sw: filled ? 0.8 : 1.6,
    });
  }
  return out;
}

export default function FacetMesh({
  hostRef,
  variant = "scatter",
}: {
  hostRef: React.RefObject<HTMLElement | null>;
  variant?: MeshVariant;
}) {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const polysRef = useRef<(SVGPolygonElement | null)[]>([]);

  const facets = useMemo<Facet[]>(() => (variant === "scatter" ? buildScatter() : buildLattice(variant)), [variant]);

  // Reacción al cursor
  useEffect(() => {
    if (reduce) return;
    const host = hostRef.current;
    const svg = svgRef.current;
    if (!host || !svg) return;

    let raf = 0;
    let pointer: { x: number; y: number } | null = null;

    const apply = () => {
      raf = 0;
      const rect = svg.getBoundingClientRect();
      // preserveAspectRatio="xMinYMin slice": la escala es la mayor de las dos
      const scale = Math.max(rect.width / VW, rect.height / VH);
      const px = pointer ? (pointer.x - rect.left) / scale : -1e4;
      const py = pointer ? (pointer.y - rect.top) / scale : -1e4;

      facets.forEach((f, i) => {
        const el = polysRef.current[i];
        if (!el) return;
        const dx = f.cx - px;
        const dy = f.cy - py;
        const d = Math.hypot(dx, dy);
        if (d < RADIUS) {
          const t = 1 - d / RADIUS;
          const e = t * t * (3 - 2 * t);
          const push = 12 * e;
          const nx = d > 0.001 ? dx / d : 0;
          const ny = d > 0.001 ? dy / d : 0;
          const spin = variant === "scatter" ? ` rotate(${(8 * e).toFixed(2)}deg)` : "";
          el.style.transform = `translate(${nx * push}px, ${ny * push}px) scale(${1 + 0.12 * e})${spin}`;
          el.style.opacity = String(Math.min(1, f.base + 0.45 * e));
        } else if (el.style.transform) {
          el.style.transform = "";
          el.style.opacity = String(f.base);
        }
      });
    };

    const onMove = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      pointer = null;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [facets, hostRef, reduce, variant]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMinYMin slice"
      className="absolute left-0 top-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="facet-up" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-brand-300)" />
          <stop offset="1" stopColor="var(--color-brand-600)" />
        </linearGradient>
        <linearGradient id="facet-down" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-brand-500)" />
          <stop offset="1" stopColor="var(--color-brand-800)" />
        </linearGradient>
      </defs>
      {facets.map((f, i) => (
        <polygon
          key={f.key}
          ref={(el) => {
            polysRef.current[i] = el;
          }}
          points={f.points}
          fill={f.fill}
          stroke={f.stroke}
          strokeWidth={f.sw}
          strokeLinejoin="round"
          style={{
            opacity: f.base,
            transformBox: "fill-box",
            transformOrigin: "center",
            transition: "transform 420ms cubic-bezier(0.16,1,0.3,1), opacity 420ms ease",
            animation: reduce ? undefined : `facet-breathe ${7 + (f.key % 5)}s ease-in-out ${(f.dist * 3).toFixed(2)}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </svg>
  );
}
