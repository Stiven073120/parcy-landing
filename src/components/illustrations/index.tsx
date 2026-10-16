import type { ReactNode } from "react";

/*
  Ilustraciones de línea monocromáticas.
  Reglas del set:
  - Un solo trazo (1.5px, puntas redondas) en gris azulado (currentColor = text-ink-faint).
  - Superficies blancas o gris muy claro. Texto simulado con líneas más claras.
  - UNA sola forma de acento por ilustración, rellena con brand-100 y borde brand-500.
  - Nada de degradados, sombras ni color de estado fuera del producto.
  Todas comparten el mismo lienzo (240×160) para que alineen en fila.
*/

const PANEL = "var(--color-panel)";
const SURFACE = "var(--color-surface)";
const TEXT = "var(--color-line-strong)"; // "texto" simulado, más claro que el trazo
const ACCENT_FILL = "var(--color-brand-100)";
const ACCENT_STROKE = "var(--color-brand-500)";
const ACCENT_SOLID = "var(--color-brand-600)";

function Illo({
  children,
  title,
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-auto w-full text-ink-faint ${className}`}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {children}
    </svg>
  );
}

/** Líneas de "texto" dentro de una superficie. */
function TextLines({ x, y, widths, gap = 8 }: { x: number; y: number; widths: number[]; gap?: number }) {
  return (
    <g stroke={TEXT} strokeWidth={2}>
      {widths.map((w, i) => (
        <path key={i} d={`M${x},${y + i * gap} h${w}`} />
      ))}
    </g>
  );
}

/* ───────────────────────────── Problema ───────────────────────────── */

/** Hoja de cálculo desactualizada: dos versiones y una celda en conflicto. */
export function IlloHojaDesactualizada(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      {/* Hoja de atrás */}
      <rect x={46} y={30} width={124} height={96} rx={6} fill={SURFACE} transform="rotate(-5 108 78)" />
      {/* Hoja de adelante */}
      <rect x={66} y={42} width={124} height={96} rx={6} fill={PANEL} />
      <path d="M66,62 h124" />
      <path d="M110,62 v76 M152,62 v76" />
      <path d="M66,82 h124 M66,102 h124 M66,122 h124" stroke={TEXT} />
      <TextLines x={74} y={72} widths={[26]} />
      <TextLines x={118} y={72} widths={[22]} />
      <TextLines x={160} y={72} widths={[22]} />
      <TextLines x={74} y={92} widths={[28]} />
      <TextLines x={118} y={92} widths={[18]} />
      <TextLines x={74} y={112} widths={[24]} />
      <TextLines x={118} y={112} widths={[26]} />
      <TextLines x={74} y={132} widths={[20]} />
      {/* Celda en conflicto (acento) */}
      <rect x={156} y={86} width={30} height={12} rx={3} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <path d="M163,92 h16" stroke={ACCENT_STROKE} strokeWidth={2} />
      {/* Aviso */}
      <circle cx={190} cy={44} r={11} fill={PANEL} />
      <path d="M190,38.5 v6.5" strokeWidth={2} />
      <circle cx={190} cy={49} r={0.9} fill="currentColor" stroke="none" />
    </Illo>
  );
}

/** Dos asesores apuntando al mismo lote. */
export function IlloVentaDuplicada(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      {/* Manzana de lotes */}
      <rect x={40} y={52} width={160} height={56} rx={6} fill={SURFACE} />
      <path d="M72,52 v56 M136,52 v56 M168,52 v56" />
      {/* Lote en disputa (acento) */}
      <rect x={104} y={52} width={32} height={56} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      {/* Cursor A (arriba izquierda) */}
      <path d="M62,22 l14,34" strokeDasharray="3 4" />
      <path d="M48,12 l16,6 -6,4 4,8 -4,2 -4,-8 -6,4 z" fill={PANEL} />
      {/* Cursor B (abajo derecha) */}
      <path d="M176,138 l-30,-30" strokeDasharray="3 4" />
      <path d="M192,148 l-16,-6 6,-4 -4,-8 4,-2 4,8 6,-4 z" fill={PANEL} />
      {/* Punto de conflicto */}
      <circle cx={120} cy={80} r={6} fill={PANEL} stroke={ACCENT_STROKE} />
      <circle cx={120} cy={80} r={2} fill={ACCENT_SOLID} stroke="none" />
    </Illo>
  );
}

/** Comercial y técnico con información distinta: enlace roto entre dispositivos. */
export function IlloEquiposDesconectados(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      {/* Portátil */}
      <rect x={24} y={46} width={92} height={60} rx={5} fill={PANEL} />
      <path d="M14,112 h112" />
      <path d="M14,112 q0,-6 6,-6 h100 q6,0 6,6" />
      <rect x={34} y={56} width={72} height={40} rx={3} fill={SURFACE} />
      <path d="M34,76 h72 M58,56 v40 M82,56 v40" stroke={TEXT} />
      {/* Teléfono */}
      <rect x={176} y={32} width={44} height={84} rx={8} fill={PANEL} />
      <path d="M192,40 h12" strokeWidth={2} />
      <rect x={184} y={50} width={28} height={50} rx={3} fill={SURFACE} />
      <path d="M184,66 h28 M184,84 h28 M198,50 v50" stroke={TEXT} />
      {/* Enlace roto */}
      <path d="M118,76 h20" strokeDasharray="3 4" />
      <path d="M156,76 h18" strokeDasharray="3 4" />
      <circle cx={147} cy={76} r={10} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <path d="M143,72 l8,8 M151,72 l-8,8" stroke={ACCENT_STROKE} strokeWidth={2} />
    </Illo>
  );
}

/* ───────────────────────────── Flujo / capacidades ───────────────────────────── */

/** Plano con vía, lotes y un lote seleccionado. */
export function IlloPlano(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      <rect x={24} y={24} width={192} height={112} rx={8} fill={SURFACE} />
      {/* Vía */}
      <path d="M24,104 C64,104 72,60 116,60 S172,104 216,104" strokeWidth={14} stroke={PANEL} />
      <path d="M24,97 C62,97 70,53 116,53 S170,97 216,97" />
      <path d="M24,111 C66,111 74,67 116,67 S174,111 216,111" />
      {/* Lotes al norte de la vía */}
      <rect x={38} y={40} width={26} height={30} rx={2} fill={PANEL} />
      <rect x={70} y={32} width={26} height={22} rx={2} fill={PANEL} />
      <rect x={152} y={36} width={26} height={24} rx={2} fill={PANEL} />
      <rect x={184} y={44} width={24} height={30} rx={2} fill={PANEL} />
      {/* Lotes al sur */}
      <rect x={56} y={114} width={26} height={16} rx={2} fill={PANEL} />
      <rect x={154} y={116} width={26} height={14} rx={2} fill={PANEL} />
      {/* Lote seleccionado (acento) */}
      <rect x={104} y={26} width={28} height={22} rx={2} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      {/* Pin */}
      <path d="M118,16 c-7,0 -11,-5 -11,-11 a11,11 0 0 1 22,0 c0,6 -4,11 -11,11 z" transform="translate(0,20)" fill={PANEL} stroke={ACCENT_STROKE} />
      <circle cx={118} cy={25} r={3} fill={ACCENT_SOLID} stroke="none" />
    </Illo>
  );
}

/** Ficha de lote con reserva y cronómetro. */
export function IlloReserva(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      {/* Ficha */}
      <rect x={36} y={40} width={104} height={82} rx={6} fill={PANEL} />
      <TextLines x={46} y={54} widths={[40]} />
      <TextLines x={46} y={70} widths={[60, 48]} />
      <path d="M36,98 h104" stroke={TEXT} />
      <TextLines x={46} y={110} widths={[34]} />
      {/* Estado (acento) */}
      <rect x={98} y={48} width={32} height={12} rx={6} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <circle cx={106} cy={54} r={2} fill={ACCENT_SOLID} stroke="none" />
      {/* Cronómetro */}
      <circle cx={178} cy={88} r={30} fill={PANEL} />
      <circle cx={178} cy={88} r={24} fill={SURFACE} />
      <path d="M172,52 h12 M178,52 v6" strokeWidth={2} />
      <path d="M178,88 v-16 M178,88 l10,6" strokeWidth={2} />
      <path d="M178,64 a24,24 0 0 1 22,15" stroke={ACCENT_STROKE} strokeWidth={3} />
    </Illo>
  );
}

/** Solicitud de venta aprobada. */
export function IlloAprobacion(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      <rect x={72} y={24} width={96} height={116} rx={6} fill={PANEL} />
      <path d="M140,24 v22 h28" />
      <TextLines x={84} y={40} widths={[40]} />
      <TextLines x={84} y={60} widths={[72, 64, 70, 52]} />
      <path d="M84,112 c6,-8 10,-6 14,0 s8,6 16,-2 s8,-4 14,2" />
      <path d="M84,122 h60" stroke={TEXT} strokeWidth={2} />
      {/* Sello de aprobación (acento) */}
      <circle cx={164} cy={120} r={20} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <path d="M154,120 l7,7 13,-14" stroke={ACCENT_STROKE} strokeWidth={2.5} />
    </Illo>
  );
}

/** Lote vendido: bandera sobre el lote. */
export function IlloVendido(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      <rect x={40} y={60} width={160} height={70} rx={6} fill={SURFACE} />
      <path d="M80,60 v70 M160,60 v70" />
      <rect x={80} y={60} width={80} height={70} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      {/* Bandera */}
      <path d="M120,96 v-70" strokeWidth={2} />
      <path d="M120,28 h36 l-8,12 8,12 h-36 z" fill={PANEL} stroke={ACCENT_STROKE} />
      <path d="M128,40 l4,4 8,-8" stroke={ACCENT_STROKE} strokeWidth={2} />
      <circle cx={120} cy={96} r={3} fill={ACCENT_SOLID} stroke="none" />
    </Illo>
  );
}

/** Equipo con roles y permisos. */
export function IlloEquipo(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      {/* Tres personas */}
      <circle cx={72} cy={62} r={14} fill={PANEL} />
      <path d="M46,110 a26,26 0 0 1 52,0" fill={PANEL} />
      <circle cx={168} cy={62} r={14} fill={PANEL} />
      <path d="M142,110 a26,26 0 0 1 52,0" fill={PANEL} />
      <circle cx={120} cy={52} r={16} fill={PANEL} />
      <path d="M90,108 a30,30 0 0 1 60,0" fill={PANEL} />
      {/* Escudo del administrador (acento) */}
      <path d="M120,86 l16,6 v12 c0,10 -8,16 -16,20 c-8,-4 -16,-10 -16,-20 v-12 z" fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <path d="M113,106 l5,5 9,-10" stroke={ACCENT_STROKE} strokeWidth={2} />
    </Illo>
  );
}

/** Reportes exportables. */
export function IlloReportes(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      <rect x={40} y={34} width={128} height={92} rx={6} fill={PANEL} />
      <TextLines x={50} y={46} widths={[36]} />
      <path d="M50,112 h108" />
      <rect x={58} y={84} width={14} height={28} rx={2} fill={SURFACE} />
      <rect x={80} y={70} width={14} height={42} rx={2} fill={SURFACE} />
      <rect x={102} y={60} width={14} height={52} rx={2} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <rect x={124} y={76} width={14} height={36} rx={2} fill={SURFACE} />
      <rect x={146} y={66} width={10} height={46} rx={2} fill={SURFACE} />
      {/* Hoja exportada */}
      <rect x={172} y={74} width={40} height={52} rx={4} fill={PANEL} />
      <path d="M198,74 v12 h14" />
      <path d="M180,96 h24 M180,106 h24 M180,116 h16" stroke={TEXT} strokeWidth={2} />
      <path d="M168,64 h22 l-6,-6 M190,64 l-6,6" strokeWidth={2} />
    </Illo>
  );
}

/** Ventana del producto con el plano, para la sección de demo. */
export function IlloDemo(props: { className?: string; title?: string }) {
  return (
    <Illo {...props}>
      <rect x={32} y={28} width={176} height={112} rx={8} fill={PANEL} />
      <path d="M32,46 h176" />
      <circle cx={44} cy={37} r={2} fill="currentColor" stroke="none" />
      <circle cx={52} cy={37} r={2} fill="currentColor" stroke="none" />
      <circle cx={60} cy={37} r={2} fill="currentColor" stroke="none" />
      <rect x={90} y={33} width={60} height={8} rx={4} fill={SURFACE} stroke="none" />
      {/* Lateral */}
      <rect x={32} y={46} width={44} height={94} fill={SURFACE} stroke="none" />
      <path d="M32,46 v94" />
      <TextLines x={40} y={60} widths={[24, 20, 26, 18]} gap={12} />
      {/* Plano */}
      <rect x={86} y={56} width={112} height={74} rx={4} fill={SURFACE} />
      <path d="M86,100 C110,100 116,72 142,72 S172,100 198,100" strokeWidth={8} stroke={PANEL} />
      <path d="M86,96 C108,96 114,68 142,68 S170,96 198,96" />
      <path d="M86,104 C112,104 118,76 142,76 S174,104 198,104" />
      <rect x={94} y={62} width={16} height={14} rx={1.5} fill={PANEL} />
      <rect x={116} y={58} width={16} height={12} rx={1.5} fill={PANEL} />
      <rect x={168} y={62} width={16} height={14} rx={1.5} fill={PANEL} />
      <rect x={104} y={114} width={16} height={12} rx={1.5} fill={PANEL} />
      <rect x={160} y={114} width={16} height={12} rx={1.5} fill={PANEL} />
      {/* Botón de reproducir (acento) */}
      <circle cx={142} cy={94} r={16} fill={ACCENT_FILL} stroke={ACCENT_STROKE} />
      <path d="M137,87 l12,7 -12,7 z" fill={ACCENT_SOLID} stroke="none" />
    </Illo>
  );
}
