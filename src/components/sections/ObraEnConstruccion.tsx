"use client";

import { motion } from "framer-motion";

// 🍌 BROMA: escena de obra con el "Parcy banano" colgando de la grúa.
// Para quitarla basta con borrar <ObraEnConstruccion /> del Hero.

const AMARILLO = "#f5c518";
const NEGRO = "#0c1e30";

// Tramo de celosía (triángulos) entre dos puntos horizontales
function CelosiaHorizontal({ x1, x2, y, alto, paso }: { x1: number; x2: number; y: number; alto: number; paso: number }) {
  const d: string[] = [];
  for (let x = x1; x < x2; x += paso) {
    d.push(`M${x},${y + alto} L${x + paso / 2},${y} L${Math.min(x + paso, x2)},${y + alto}`);
  }
  return <path d={d.join(" ")} fill="none" stroke={AMARILLO} strokeWidth={2} />;
}

function CelosiaVertical({ x, y1, y2, ancho, paso }: { x: number; y1: number; y2: number; ancho: number; paso: number }) {
  const d: string[] = [];
  for (let y = y1; y < y2; y += paso) {
    d.push(`M${x},${y} L${x + ancho},${y + paso / 2} L${x},${Math.min(y + paso, y2)}`);
  }
  return <path d={d.join(" ")} fill="none" stroke={AMARILLO} strokeWidth={2} />;
}

function Cono({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},392)`}>
      <path d="M-14,0 L-4,-34 L4,-34 L14,0 Z" fill="#f97316" />
      <path d="M-10,-12 L10,-12 L8,-20 L-8,-20 Z" fill="#fff" />
      <rect x={-18} y={-2} width={36} height={5} rx={1.5} fill="#ea580c" />
    </g>
  );
}

export default function ObraEnConstruccion() {
  return (
    <div className="mx-auto mb-10 w-full max-w-3xl">
      <svg
        viewBox="0 0 800 420"
        className="h-auto w-full"
        role="img"
        aria-label="Sitio en construcción: una grúa sostiene a la mascota de Parcy Digital"
      >
        <defs>
          <pattern id="rayas-obra" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="14" height="28" fill={AMARILLO} />
            <rect x="14" width="14" height="28" fill={NEGRO} />
          </pattern>
        </defs>

        {/* Suelo */}
        <rect x={0} y={392} width={800} height={28} rx={4} fill="#d6c3a5" />
        <rect x={0} y={392} width={800} height={4} fill="#b89f7a" />

        {/* ── Edificio en obra (derecha) ─────────────────────────────── */}
        <g>
          {[0, 1, 2, 3].map((piso) => (
            <rect key={piso} x={560} y={372 - piso * 70} width={200} height={10} fill="#94a3b8" />
          ))}
          {[565, 625, 685, 745].map((x) => (
            <rect key={x} x={x} y={172} width={10} height={220} fill="#a8b4c4" />
          ))}
          {/* Ventanas ya instaladas en los pisos bajos */}
          {[580, 640, 700].map((x) =>
            [312, 242].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width={38} height={46} rx={2} fill="#98d6f0" opacity={0.75} />)
          )}
          {/* Andamio */}
          <g stroke="#64748b" strokeWidth={2}>
            {[540, 552].map((x) => (
              <line key={x} x1={x} y1={392} x2={x} y2={160} />
            ))}
            {[382, 312, 242, 172].map((y) => (
              <line key={y} x1={536} y1={y} x2={556} y2={y} />
            ))}
            {[382, 312, 242].map((y) => (
              <line key={`d${y}`} x1={540} y1={y} x2={552} y2={y - 70} />
            ))}
          </g>
        </g>

        {/* ── Grúa torre (izquierda) ─────────────────────────────────── */}
        <g>
          {/* Mástil */}
          <rect x={110} y={70} width={3} height={322} fill={AMARILLO} />
          <rect x={137} y={70} width={3} height={322} fill={AMARILLO} />
          <CelosiaVertical x={112} y1={80} y2={392} ancho={26} paso={30} />
          {/* Base */}
          <rect x={92} y={378} width={66} height={14} rx={2} fill="#475569" />
          {/* Cabina */}
          <rect x={140} y={74} width={30} height={26} rx={3} fill={AMARILLO} />
          <rect x={146} y={79} width={18} height={12} rx={1.5} fill="#98d6f0" />
          {/* Pluma */}
          <rect x={40} y={56} width={620} height={3} fill={AMARILLO} />
          <rect x={40} y={74} width={620} height={3} fill={AMARILLO} />
          <CelosiaHorizontal x1={40} x2={660} y={57} alto={18} paso={24} />
          {/* Contrapeso */}
          <rect x={44} y={78} width={46} height={30} rx={2} fill="#475569" />
          {/* Torreta y tirantes */}
          <path d="M118,56 L125,14 L132,56" fill="none" stroke={AMARILLO} strokeWidth={3} />
          <line x1={125} y1={14} x2={50} y2={56} stroke={NEGRO} strokeWidth={1.2} />
          <line x1={125} y1={14} x2={560} y2={56} stroke={NEGRO} strokeWidth={1.2} />
          {/* Luz de altura */}
          <motion.circle
            cx={125}
            cy={11}
            r={4}
            fill="#f43f5e"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </g>

        {/* ── Carro + cable + banano colgante (se balancea) ─────────── */}
        <rect x={392} y={77} width={36} height={10} rx={2} fill="#475569" />
        <motion.g
          style={{ transformBox: "view-box", transformOrigin: "410px 87px" }}
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1={410} y1={87} x2={410} y2={132} stroke={NEGRO} strokeWidth={2} />
          {/* Gancho */}
          <path d="M410,132 v10 a8,8 0 1 1 -8,8" fill="none" stroke="#475569" strokeWidth={4} strokeLinecap="round" />
          <image
            href="/images/broma/parcy-banano.jpeg"
            x={362}
            y={146}
            width={96}
            height={204}
            preserveAspectRatio="xMidYMin meet"
            style={{ mixBlendMode: "multiply" }}
          />
        </motion.g>

        {/* ── Valla, conos y cartel ─────────────────────────────────── */}
        <g>
          <rect x={196} y={352} width={6} height={40} fill="#475569" />
          <rect x={330} y={352} width={6} height={40} fill="#475569" />
          <rect x={186} y={340} width={160} height={20} rx={3} fill="url(#rayas-obra)" stroke={NEGRO} strokeWidth={1.5} />
        </g>
        <Cono x={476} />
        <Cono x={512} />

        {/* Cartel */}
        <g transform="translate(180,206) rotate(-3)">
          <rect x={-2} y={60} width={6} height={128} fill="#475569" transform="translate(30,0)" />
          <rect x={-2} y={60} width={6} height={128} fill="#475569" transform="translate(110,0)" />
          <rect x={0} y={0} width={150} height={66} rx={6} fill={AMARILLO} stroke={NEGRO} strokeWidth={3} />
          <text x={75} y={28} textAnchor="middle" fontSize={15} fontWeight={800} fill={NEGRO}>
            EN CONSTRUCCIÓN
          </text>
          <text x={75} y={48} textAnchor="middle" fontSize={11} fontWeight={600} fill={NEGRO}>
            Disculpe las molestias
          </text>
        </g>
      </svg>
    </div>
  );
}
