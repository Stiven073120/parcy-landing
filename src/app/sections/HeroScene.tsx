"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────────────────
   Escena isométrica: un mapa con parcelas, un lote que se resalta y una casa
   que emerge de él. Todo se dibuja en coordenadas de plano (x, y, z) y se
   proyecta a isométrico con `iso()`.
   ───────────────────────────────────────────────────────────────────────── */
const CX = 364;
const CY = 70;
const COS = 0.866;
const SIN = 0.5;

type P3 = [number, number, number?];
const iso = (x: number, y: number, z = 0) => ({ X: CX + (x - y) * COS, Y: CY + (x + y) * SIN - z });
const pts = (arr: P3[]) =>
  arr
    .map(([x, y, z]) => {
      const p = iso(x, y, z ?? 0);
      return `${p.X.toFixed(1)},${p.Y.toFixed(1)}`;
    })
    .join(" ");
// Caja vertical (prisma) entre dos esquinas del plano, de z0 a z1
const box = (x0: number, y0: number, x1: number, y1: number, z0: number, z1: number) => ({
  front: pts([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]]),
  side: pts([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]]),
  top: pts([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]),
});

// Plano 420 × 420. Vías en x≈210 y y≈210. Cuatro cuadrantes con parcelas grandes de 78×80.
const QUADRANTS: [number, number][] = [
  [18, 20],
  [240, 20],
  [18, 234],
  [240, 234],
];
const PW = 78;
const PH = 80;
const GAP = 6;

type Parcel = { id: number; x: number; y: number; d: number };
const PARCELS: Parcel[] = QUADRANTS.flatMap(([qx, qy], qi) =>
  Array.from({ length: 4 }, (_, k) => {
    const c = k % 2;
    const r = Math.floor(k / 2);
    const x = qx + c * (PW + GAP);
    const y = qy + r * (PH + GAP);
    return { id: qi * 6 + k, x, y, d: x + y };
  })
);
const MAX_D = Math.max(...PARCELS.map((p) => p.d));

// Lote protagonista: cuadrante 2, columna 0, fila 1 (junto a las dos vías)
const LOT = PARCELS[4 + 2];

// Casa: ocupa casi todo el lote
const HX0 = LOT.x + 7;
const HX1 = LOT.x + PW - 9;
const HY0 = LOT.y + 8;
const HY1 = LOT.y + PH - 16;
const HYM = (HY0 + HY1) / 2;
const H = 54; // alto de muros (dos plantas)
const R = 30; // alto de la cumbrera sobre los muros
const OV = 5; // voladizo del techo

const TREES: [number, number, number][] = [
  [8, 212, 1.1],
  [412, 214, 1.2],
  [210, 6, 1],
  [208, 414, 1.1],
  [70, 412, 0.9],
  [350, 8, 0.9],
];

// Fases: -1 oculto → 0 mapa → 1 lote → 2 casa → 3 vendido → (reinicio)
const PHASES: { step: number; ms: number }[] = [
  { step: -1, ms: 250 },
  { step: 0, ms: 850 },
  { step: 1, ms: 550 },
  { step: 2, ms: 900 },
  { step: 3, ms: 3200 },
];

export default function HeroScene() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(reduce ? 4 : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(() => setPhase((p) => (p + 1) % PHASES.length), PHASES[phase].ms);
    return () => clearTimeout(id);
  }, [phase, reduce]);

  const step = reduce ? 3 : PHASES[phase].step;
  const showMap = step >= 0;
  const showLot = step >= 1;
  const showHouse = step >= 2;
  const showSold = step >= 3;

  const lotCenter = useMemo(() => iso(LOT.x + PW / 2, LOT.y + PH / 2, 0), []);
  const pinTop = iso((HX0 + HX1) / 2, HYM, H + R + 26);
  const chimney = box(HX1 - 16, HY0 + 8, HX1 - 7, HY0 + 17, H + R - 10, H + R + 14);

  return (
    <div className="relative mx-auto w-full max-w-[760px]" aria-hidden="true">
      <svg viewBox="0 0 730 530" className="h-auto w-full overflow-visible">
        <defs>
          <radialGradient id="scene-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--color-brand-400)" stopOpacity={0.5} />
            <stop offset="1" stopColor="var(--color-brand-400)" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3f7fa" />
            <stop offset="1" stopColor="#dde8f0" />
          </linearGradient>
          <radialGradient id="scene-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#1f8bff" stopOpacity={0.55} />
            <stop offset="0.6" stopColor="#1f8bff" stopOpacity={0.12} />
            <stop offset="1" stopColor="#1f8bff" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="roof-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1f8bff" />
            <stop offset="1" stopColor="#0757cf" />
          </linearGradient>
        </defs>

        {/* Terreno */}
        <motion.g initial={false} animate={{ opacity: showMap ? 1 : 0 }} transition={{ duration: 0.6, ease: EASE }}>
          {/* Halo azul bajo el bloque: lo hace flotar sobre el azul profundo */}
          <ellipse cx={iso(210, 210, 0).X} cy={iso(210, 210, 0).Y + 40} rx={400} ry={190} fill="url(#scene-halo)" />
          <polygon points={pts([[6, 10], [426, 10], [426, 430], [6, 430]])} fill="rgba(4,14,42,0.35)" transform="translate(0,26)" />
          <polygon points={pts([[0, 0], [420, 0], [420, 420], [0, 420]])} fill="url(#ground)" stroke="#c9d8e4" />
          <polygon points={pts([[0, 420], [420, 420], [420, 420, -14], [0, 420, -14]])} fill="#b6cde4" />
          <polygon points={pts([[420, 0], [420, 420], [420, 420, -14], [420, 0, -14]])} fill="#9bb8d6" />

          {/* Vías */}
          <polygon points={pts([[0, 192], [420, 192], [420, 222], [0, 222]])} fill="#cfdde8" />
          <polygon points={pts([[196, 0], [226, 0], [226, 420], [196, 420]])} fill="#cfdde8" />
          <polyline points={pts([[0, 207], [420, 207]])} fill="none" stroke="#ffffff" strokeWidth={1.2} strokeDasharray="7 7" />
          <polyline points={pts([[211, 0], [211, 420]])} fill="none" stroke="#ffffff" strokeWidth={1.2} strokeDasharray="7 7" />
        </motion.g>

        {/* Parcelas: aparecen en diagonal */}
        {PARCELS.map((p) => (
          <motion.polygon
            key={p.id}
            points={pts([[p.x, p.y], [p.x + PW, p.y], [p.x + PW, p.y + PH], [p.x, p.y + PH]])}
            fill={p.id === LOT.id ? "var(--color-brand-100)" : "#ffffff"}
            stroke={p.id === LOT.id ? "var(--color-brand-400)" : "var(--color-brand-200)"}
            strokeWidth={p.id === LOT.id ? 1.5 : 1}
            initial={false}
            animate={{ opacity: showMap ? 1 : 0 }}
            transition={{ duration: 0.35, delay: showMap ? 0.05 + (p.d / MAX_D) * 0.45 : 0, ease: EASE }}
          />
        ))}

        {/* Árboles */}
        {TREES.map(([x, y, s], i) => {
          const b = iso(x, y, 0);
          return (
            <motion.g key={i} initial={false} animate={{ opacity: showMap ? 1 : 0 }} transition={{ duration: 0.3, delay: showMap ? 0.45 : 0 }}>
              <ellipse cx={b.X} cy={b.Y} rx={8 * s} ry={4 * s} fill="rgba(11,26,46,0.12)" />
              <circle cx={b.X} cy={b.Y - 10 * s} r={9 * s} fill="#4aa3ff" />
              <circle cx={b.X - 4 * s} cy={b.Y - 14 * s} r={7 * s} fill="#84bfff" />
            </motion.g>
          );
        })}

        {/* Resalte del lote */}
        <motion.g initial={false} animate={{ opacity: showLot ? 1 : 0 }} transition={{ duration: 0.5, ease: EASE }}>
          <ellipse cx={lotCenter.X} cy={lotCenter.Y} rx={84} ry={42} fill="url(#scene-glow)" />
          <motion.polygon
            points={pts([[LOT.x, LOT.y], [LOT.x + PW, LOT.y], [LOT.x + PW, LOT.y + PH], [LOT.x, LOT.y + PH]])}
            fill="var(--color-brand-300)"
            stroke="var(--color-brand-600)"
            strokeWidth={1.5}
            animate={showLot && !reduce ? { opacity: [0.85, 0.45, 0.85] } : { opacity: 0.85 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Casa: emerge del lote */}
        <motion.g
          initial={false}
          animate={{ opacity: showHouse ? 1 : 0, y: showHouse ? 0 : 30 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {/* Sombra proyectada */}
          <polygon points={pts([[HX0, HY0], [HX1 + 16, HY0], [HX1 + 16, HY1 + 10], [HX0, HY1 + 10]])} fill="rgba(11,26,46,0.18)" />
          {/* Losa */}
          <polygon points={box(HX0 - 2, HY0 - 2, HX1 + 2, HY1 + 2, 0, 3).front} fill="#9fb3c3" />
          <polygon points={box(HX0 - 2, HY0 - 2, HX1 + 2, HY1 + 2, 0, 3).side} fill="#8aa0b2" />
          <polygon points={box(HX0 - 2, HY0 - 2, HX1 + 2, HY1 + 2, 0, 3).top} fill="#d7e3ec" />

          {/* Muro frontal (y = HY1) y lateral (x = HX1) */}
          <polygon points={pts([[HX0, HY1, 3], [HX1, HY1, 3], [HX1, HY1, H], [HX0, HY1, H]])} fill="#eef6fb" stroke="#c9dceb" strokeWidth={0.8} />
          <polygon points={pts([[HX1, HY0, 3], [HX1, HY1, 3], [HX1, HY1, H], [HX1, HY0, H]])} fill="#9ccbff" stroke="#7bb8ff" strokeWidth={0.8} />
          {/* Zócalo */}
          <polygon points={pts([[HX0, HY1, 3], [HX1, HY1, 3], [HX1, HY1, 7], [HX0, HY1, 7]])} fill="#c9dceb" />
          <polygon points={pts([[HX1, HY0, 3], [HX1, HY1, 3], [HX1, HY1, 7], [HX1, HY0, 7]])} fill="#7bb8ff" />

          {/* Línea de entrepiso */}
          <polyline points={pts([[HX0, HY1, 27], [HX1, HY1, 27], [HX1, HY0, 27]])} fill="none" stroke="#c9dceb" strokeWidth={1} />
          {/* Puerta con marco, ventanilla y escalón */}
          <polygon points={pts([[HX0 + 24, HY1, 3], [HX0 + 38, HY1, 3], [HX0 + 38, HY1, 24], [HX0 + 24, HY1, 24]])} fill="#0a46a6" />
          <polygon points={pts([[HX0 + 25.5, HY1, 3], [HX0 + 36.5, HY1, 3], [HX0 + 36.5, HY1, 22.5], [HX0 + 25.5, HY1, 22.5]])} fill="#0757cf" />
          <polygon points={pts([[HX0 + 27.5, HY1, 15], [HX0 + 34.5, HY1, 15], [HX0 + 34.5, HY1, 20], [HX0 + 27.5, HY1, 20]])} fill="#9ccbff" />
          <circle cx={iso(HX0 + 34.5, HY1, 12).X} cy={iso(HX0 + 34.5, HY1, 12).Y} r={1} fill="#eaf5fb" />
          <polygon points={pts([[HX0 + 21, HY1, 0], [HX0 + 41, HY1, 0], [HX0 + 41, HY1 + 5, 0], [HX0 + 21, HY1 + 5, 0]])} fill="#c9dceb" />

          {/* Ventanas frontales: dos plantas (marco claro + vidrio + cruceta) */}
          {([
            [HX0 + 5, 10],
            [HX0 + 44, 10],
            [HX0 + 5, 34],
            [HX0 + 26, 34],
            [HX0 + 44, 34],
          ] as [number, number][]).map(([wx, wz], i) => (
            <g key={i}>
              <polygon points={pts([[wx, HY1, wz], [wx + 13, HY1, wz], [wx + 13, HY1, wz + 14], [wx, HY1, wz + 14]])} fill="#ffffff" />
              <polygon points={pts([[wx + 1.2, HY1, wz + 1.2], [wx + 11.8, HY1, wz + 1.2], [wx + 11.8, HY1, wz + 12.8], [wx + 1.2, HY1, wz + 12.8]])} fill="#4aa3ff" />
              <polyline points={pts([[wx + 6.5, HY1, wz + 1.2], [wx + 6.5, HY1, wz + 12.8]])} fill="none" stroke="#ffffff" strokeWidth={0.9} />
              <polyline points={pts([[wx + 1.2, HY1, wz + 7], [wx + 11.8, HY1, wz + 7]])} fill="none" stroke="#ffffff" strokeWidth={0.9} />
              {/* Alféizar */}
              <polyline points={pts([[wx - 1, HY1, wz], [wx + 14, HY1, wz]])} fill="none" stroke="#c9dceb" strokeWidth={1.4} />
            </g>
          ))}
          {/* Ventanas laterales: dos plantas */}
          {([
            [HY0 + 8, 10],
            [HY0 + 30, 10],
            [HY0 + 8, 34],
            [HY0 + 30, 34],
          ] as [number, number][]).map(([wy, wz], i) => (
            <g key={i}>
              <polygon points={pts([[HX1, wy, wz], [HX1, wy + 13, wz], [HX1, wy + 13, wz + 14], [HX1, wy, wz + 14]])} fill="#ffffff" />
              <polygon points={pts([[HX1, wy + 1.2, wz + 1.2], [HX1, wy + 11.8, wz + 1.2], [HX1, wy + 11.8, wz + 12.8], [HX1, wy + 1.2, wz + 12.8]])} fill="#1f8bff" />
              <polyline points={pts([[HX1, wy + 6.5, wz + 1.2], [HX1, wy + 6.5, wz + 12.8]])} fill="none" stroke="#ffffff" strokeWidth={0.9} />
            </g>
          ))}

          {/* Hastial (triángulo sobre el muro lateral) */}
          <polygon points={pts([[HX1, HY0, H], [HX1, HY1, H], [HX1, HYM, H + R]])} fill="#84bfff" stroke="#6fb3ff" strokeWidth={0.8} />

          {/* Techo: cae después de los muros */}
          <motion.g
            initial={false}
            animate={{ opacity: showHouse ? 1 : 0, y: showHouse ? 0 : -20 }}
            transition={{ duration: 0.45, delay: showHouse ? 0.2 : 0, ease: EASE }}
          >
            {/* Falda trasera (visible en el borde) */}
            <polygon points={pts([[HX0 - OV, HY0 - OV, H - 1], [HX1 + OV, HY0 - OV, H - 1], [HX1 + OV, HYM, H + R], [HX0 - OV, HYM, H + R]])} fill="#0a46a6" />
            {/* Chimenea sobre la falda trasera */}
            <polygon points={chimney.front} fill="#c9d7e2" />
            <polygon points={chimney.side} fill="#9fb3c3" />
            <polygon points={chimney.top} fill="#e6eef4" />
            {/* Falda frontal */}
            <polygon points={pts([[HX0 - OV, HY1 + OV, H - 1], [HX1 + OV, HY1 + OV, H - 1], [HX1 + OV, HYM, H + R], [HX0 - OV, HYM, H + R]])} fill="url(#roof-front)" />
            {/* Alero y cumbrera */}
            <polyline points={pts([[HX0 - OV, HY1 + OV, H - 1], [HX1 + OV, HY1 + OV, H - 1]])} fill="none" stroke="#b6d8ff" strokeWidth={1.5} />
            <polyline points={pts([[HX0 - OV, HYM, H + R], [HX1 + OV, HYM, H + R]])} fill="none" stroke="#d9ebff" strokeWidth={2} />
          </motion.g>

          {/* Camino de la puerta a la vía y arbusto */}
          {[0, 1, 2].map((i) => (
            <polygon
              key={i}
              points={pts([[HX0 + 25, HY1 + 6 + i * 5], [HX0 + 37, HY1 + 6 + i * 5], [HX0 + 37, HY1 + 9.5 + i * 5], [HX0 + 25, HY1 + 9.5 + i * 5]])}
              fill="#d7e3ec"
            />
          ))}
          {/* Jardín: arbustos y un árbol */}
          <circle cx={iso(HX0 + 8, HY1 + 9).X} cy={iso(HX0 + 8, HY1 + 9).Y - 6} r={6} fill="#4aa3ff" />
          <circle cx={iso(HX0 + 3, HY1 + 6).X} cy={iso(HX0 + 3, HY1 + 6).Y - 9} r={5} fill="#84bfff" />
          <circle cx={iso(HX0 + 54, HY1 + 8).X} cy={iso(HX0 + 54, HY1 + 8).Y - 5} r={5} fill="#4aa3ff" />
          <line x1={iso(HX1 + 10, HY0 - 2).X} y1={iso(HX1 + 10, HY0 - 2).Y} x2={iso(HX1 + 10, HY0 - 2).X} y2={iso(HX1 + 10, HY0 - 2).Y - 16} stroke="#8aa0b2" strokeWidth={2} />
          <circle cx={iso(HX1 + 10, HY0 - 2).X} cy={iso(HX1 + 10, HY0 - 2).Y - 22} r={11} fill="#4aa3ff" />
          <circle cx={iso(HX1 + 10, HY0 - 2).X - 5} cy={iso(HX1 + 10, HY0 - 2).Y - 27} r={8} fill="#84bfff" />
        </motion.g>

        {/* Pin "Vendido" */}
        <motion.g
          initial={false}
          animate={{ opacity: showSold ? 1 : 0, y: showSold ? 0 : 10 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <line x1={pinTop.X} y1={pinTop.Y + 2} x2={pinTop.X} y2={pinTop.Y + 22} stroke="#ffffff" strokeWidth={1.5} />
          <circle cx={pinTop.X} cy={pinTop.Y + 22} r={3} fill="#ffffff" />
          <rect x={pinTop.X - 70} y={pinTop.Y - 30} width={140} height={32} rx={16} fill="#ffffff" />
          <circle cx={pinTop.X - 50} cy={pinTop.Y - 14} r={5} fill="var(--color-vendido)" />
          <text x={pinTop.X + 8} y={pinTop.Y - 9.5} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--color-ink)" fontFamily="var(--font-sans)">
            Lote 14 · Vendido
          </text>
        </motion.g>
      </svg>

    </div>
  );
}
