"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calculator, Check, Copy, Layers, Map, MapPin, Minus, Plus, RotateCcw, Search, Sparkles, Square, Trash2, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ───────────────────────── Estados (el lenguaje del producto) ───────────────────────── */
type Status = "disponible" | "reservado" | "vendido" | "bloqueado";

const STATUS: Record<Status, { label: string; color: string }> = {
  disponible: { label: "Disponible", color: "var(--color-disponible)" },
  reservado: { label: "Reservado", color: "var(--color-reservado)" },
  vendido: { label: "Vendido", color: "var(--color-vendido)" },
  bloqueado: { label: "Bloqueado", color: "var(--color-bloqueado)" },
};
const ORDER: Status[] = ["disponible", "reservado", "vendido", "bloqueado"];

/* ───────────────────────── Lotes de la demo ───────────────────────── */
type Lot = {
  id: string; // DEMO-013
  etapa: number;
  area: number;
  price: number;
  status: Status;
  pos: { x: number; y: number } | null; // % del mapa
};

const SEED: Lot[] = [
  { id: "DEMO-001", etapa: 1, area: 312, price: 128_000_000, status: "disponible", pos: { x: 20, y: 21 } },
  { id: "DEMO-002", etapa: 1, area: 298, price: 124_000_000, status: "vendido", pos: { x: 28, y: 21 } },
  { id: "DEMO-003", etapa: 1, area: 276, price: 115_000_000, status: "vendido", pos: { x: 20, y: 35 } },
  { id: "DEMO-004", etapa: 1, area: 221, price: 129_000_000, status: "disponible", pos: { x: 28, y: 35 } },
  { id: "DEMO-005", etapa: 1, area: 284, price: 116_000_000, status: "disponible", pos: { x: 20, y: 49 } },
  { id: "DEMO-006", etapa: 1, area: 305, price: 131_000_000, status: "reservado", pos: { x: 28, y: 49 } },
  { id: "DEMO-007", etapa: 2, area: 352, price: 148_000_000, status: "disponible", pos: { x: 39, y: 23 } },
  { id: "DEMO-008", etapa: 2, area: 340, price: 142_000_000, status: "vendido", pos: { x: 49, y: 23 } },
  { id: "DEMO-009", etapa: 2, area: 365, price: 151_000_000, status: "disponible", pos: { x: 59, y: 23 } },
  { id: "DEMO-010", etapa: 2, area: 330, price: 139_000_000, status: "bloqueado", pos: { x: 69, y: 23 } },
  { id: "DEMO-011", etapa: 2, area: 318, price: 134_000_000, status: "disponible", pos: { x: 39, y: 65 } },
  { id: "DEMO-012", etapa: 2, area: 326, price: 136_000_000, status: "vendido", pos: { x: 49, y: 65 } },
  { id: "DEMO-013", etapa: 2, area: 284, price: 116_000_000, status: "disponible", pos: null },
  { id: "DEMO-014", etapa: 2, area: 297, price: 121_000_000, status: "reservado", pos: null },
  { id: "DEMO-015", etapa: 3, area: 410, price: 168_000_000, status: "disponible", pos: null },
];

const fmtCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

const ZOOMS = [1, 1.5, 2];

/* ───────────────────────── Mapa aéreo estilizado (viewBox 1000×750) ───────────────────────── */
const rnd = (i: number, k = 0) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const f1 = (n: number) => n.toFixed(1);

// Bosque alrededor del predio (determinista)
const TREES = Array.from({ length: 140 }, (_, i) => ({
  x: f1(rnd(i, 1) * 1000),
  y: f1(rnd(i, 2) * 750),
  r: f1(7 + rnd(i, 3) * 11),
  dark: rnd(i, 4) > 0.5,
}));

// Predio y cerca
const SITE = "150,70 520,40 880,250 930,520 680,715 190,700 90,430";

// Parcelas: cuadriláteros con una leve irregularidad
function quad(x: number, y: number, w: number, h: number, seed: number) {
  const j = (k: number) => (rnd(seed, k) - 0.5) * 10;
  return `${f1(x + j(1))},${f1(y + j(2))} ${f1(x + w + j(3))},${f1(y + j(4))} ${f1(x + w + j(5))},${f1(y + h + j(6))} ${f1(x + j(7))},${f1(y + h + j(8))}`;
}
const PARCELS: string[] = [];
for (let r = 0; r < 5; r++) for (let c = 0; c < 2; c++) PARCELS.push(quad(130 + c * 80, 110 + r * 104, 78, 102, r * 10 + c)); // oeste
for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) PARCELS.push(quad(340 + c * 100, 110 + r * 120, 98, 118, 100 + r * 10 + c)); // norte
for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) PARCELS.push(quad(340 + c * 100, 430 + r * 116, 98, 114, 200 + r * 10 + c)); // sur
for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) PARCELS.push(quad(760 + c * 80, 370 + r * 100, 78, 98, 300 + r * 10 + c)); // este

const ROAD_V = "M300,85 C305,220 260,300 300,390 S320,620 300,690";
const ROAD_H = "M300,390 C420,400 440,330 560,330 S760,300 960,330";

export default function PlanoInteractivo() {
  const reduce = useReducedMotion();
  const [lots, setLots] = useState<Lot[]>(SEED);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<"pendientes" | "ubicados" | "todos">("pendientes");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Status | null>(null);
  const [zoomIdx, setZoomIdx] = useState(0);
  // "asignacion": ubicar lotes con el panel lateral · "venta": solo el mapa y la ficha de venta
  const [mode, setMode] = useState<"asignacion" | "venta">("asignacion");
  const [saleId, setSaleId] = useState<string | null>(null);

  const zoom = ZOOMS[zoomIdx];
  const mapRef = useRef<HTMLDivElement>(null); // capa del mapa (4:3): su rect sirve para convertir coordenadas
  const boxRef = useRef<HTMLDivElement>(null); // caja visible del mapa (límite del arrastre con zoom)
  // El zoom (y con él el arrastre) solo existe en pantallas con puntero fino; en móvil el mapa es fijo y la página desplaza normal
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const raf = requestAnimationFrame(() => setFine(mq.matches));
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onChange);
    };
  }, []);
  const canDrag = fine && zoom > 1;
  const dragRef = useRef<{ id: string; moved: boolean; startX: number; startY: number } | null>(null);

  const selected = lots.find((l) => l.id === selectedId) ?? null;
  const saleLot = lots.find((l) => l.id === saleId) ?? null;
  const placed = lots.filter((l) => l.pos);
  const pending = lots.filter((l) => !l.pos);

  const counts = useMemo(() => {
    const c: Record<Status, number> = { disponible: 0, reservado: 0, vendido: 0, bloqueado: 0 };
    lots.forEach((l) => c[l.status]++);
    return c;
  }, [lots]);

  const update = (id: string, patch: Partial<Lot>) =>
    setLots((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  // Punto de pantalla → % del mapa (válido con zoom porque usa el rect ya transformado)
  const toPercent = (clientX: number, clientY: number) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    return { x: Math.min(98, Math.max(2, x)), y: Math.min(97, Math.max(3, y)) };
  };

  // Toque en el mapa: ubica el lote seleccionado si aún no tiene posición.
  // Se resuelve con pointerdown/pointerup (no con click) para que funcione igual con el dedo
  // aunque la capa sea arrastrable.
  const tapRef = useRef<{ x: number; y: number } | null>(null);
  const onMapPointerDown = (e: React.PointerEvent) => {
    tapRef.current = { x: e.clientX, y: e.clientY };
  };
  const onMapPointerUp = (e: React.PointerEvent) => {
    const t = tapRef.current;
    tapRef.current = null;
    if (!t || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 6) return;
    if (mode !== "asignacion" || !selected || selected.pos) return;
    const p = toPercent(e.clientX, e.clientY);
    if (!p) return;
    update(selected.id, { pos: p });
    setDirty(true);
    setSaved(false);
    setTab("ubicados");
  };

  // Ficha de venta abierta: cerrar con Escape y bloquear el scroll de la página (en móvil, si no, la página se corre detrás)
  useEffect(() => {
    if (!saleId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSaleId(null);
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [saleId]);

  // Arrastre de marcadores para reposicionar
  const onMarkerDown = (e: React.PointerEvent, id: string) => {
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { id, moved: false, startX: e.clientX, startY: e.clientY };
  };
  const onMarkerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    if (!d.moved && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < 4) return;
    d.moved = true;
    const p = toPercent(e.clientX, e.clientY);
    if (p) update(d.id, { pos: p });
  };
  const onMarkerUp = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setSelectedId(d.id);
    if (d.moved) {
      setDirty(true);
      setSaved(false);
    }
    dragRef.current = null;
  };

  const select = useCallback((id: string) => {
    setSelectedId(id);
    setDirty(false);
    setSaved(false);
  }, []);

  const removeFromMap = (id: string) => {
    update(id, { pos: null });
    setDirty(false);
    setSaved(false);
    setTab("pendientes");
  };

  const save = () => {
    setDirty(false);
    setSaved(true);
  };
  useEffect(() => {
    if (!saved) return;
    const t = setTimeout(() => setSaved(false), 2200);
    return () => clearTimeout(t);
  }, [saved]);

  const reset = () => {
    setLots(SEED);
    setSelectedId(null);
    setDirty(false);
    setSaved(false);
    setTab("pendientes");
    setQuery("");
    setFilter(null);
    setZoomIdx(0);
  };

  const listed = (tab === "pendientes" ? pending : tab === "ubicados" ? placed : lots).filter(
    (l) => !query || l.id.toLowerCase().includes(query.toLowerCase()) || `etapa ${l.etapa}`.includes(query.toLowerCase())
  );

  const num = (id: string) => id.split("-")[1];

  return (
    <section id="producto" className="fade-b-panel scroll-mt-20 bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
          <h2 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem]">
            Pruébalo: <span className="text-celeste">ubica tus unidades</span> en el plano.
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Así se asignan las unidades en Parcy, aquí con un proyecto de lotes. Elige uno pendiente,
            haz clic en el plano para colocar su marcador y revisa sus datos. Puedes arrastrarlo, cambiar su estado o quitarlo.
          </p>
        </div>

        {/* Modo: asignación (ubicar lotes) o venta (solo el mapa con sus puntos) */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="grid w-full grid-cols-2 rounded-full border border-line bg-panel p-1 sm:inline-flex sm:w-auto" role="group" aria-label="Modo de la demo">
            {(
              [
                ["asignacion", "Asignación de lotes", Layers],
                ["venta", "Vista de venta", Map],
              ] as const
            ).map(([key, label, Icon]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setMode(key);
                  setSelectedId(null);
                  setSaleId(null);
                }}
                aria-pressed={mode === key}
                className={`flex h-9 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-colors duration-150 sm:px-4 ${
                  mode === key ? "bg-brand-600 text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
          <p className="w-full text-center text-sm text-ink-soft sm:w-auto sm:text-left">
            {mode === "asignacion"
              ? "Ubica los lotes en el plano y guarda su posición."
              : "Lo que ve el asesor: toca un lote para ver su ficha y registrar la venta."}
          </p>
        </div>

        <div className={`mt-4 grid gap-4 ${mode === "asignacion" ? "lg:grid-cols-[minmax(0,1fr)_340px]" : ""} lg:items-start`}>
          {/* ───────────── Mapa ───────────── */}
          <div className={`card overflow-hidden ${mode === "venta" ? "mx-auto w-full max-w-4xl" : ""}`}>
            {/* Caja visible: cuadrada en móvil, 4:3 desde tablet. Su altura no depende del panel. La capa 4:3 la cubre. */}
            <div
              ref={boxRef}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#2f5a26]"
            >
              <motion.div
                className="absolute inset-0"
                style={{ scale: zoom }}
                transition={{ duration: 0.35, ease: EASE }}
                drag={canDrag}
                dragConstraints={boxRef}
                dragElastic={0.05}
                dragMomentum={false}
              >
                <div
                  ref={mapRef}
                  className={`absolute inset-0 ${mode === "asignacion" && selected && !selected.pos ? "cursor-crosshair" : ""}`}
                  onPointerDown={onMapPointerDown}
                  onPointerUp={onMapPointerUp}
                >
                  <svg viewBox="0 0 1000 750" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full select-none" aria-hidden="true">
                    <defs>
                      <radialGradient id="site-light" cx="45%" cy="40%" r="70%">
                        <stop offset="0" stopColor="#c9e07a" />
                        <stop offset="1" stopColor="#8fbb4e" />
                      </radialGradient>
                    </defs>
                    {/* Bosque */}
                    <rect width="1000" height="750" fill="#3b6a2d" />
                    {TREES.map((t, i) => (
                      <g key={i}>
                        <circle cx={t.x} cy={t.y} r={t.r} fill={t.dark ? "#2a5222" : "#4f8a36"} />
                        <circle cx={t.x} cy={t.y} r={+t.r * 0.45} fill={t.dark ? "#386a2b" : "#6aa646"} transform={`translate(${-(+t.r) * 0.3},${-(+t.r) * 0.3})`} />
                      </g>
                    ))}
                    {/* Predio y cerca */}
                    <polygon points={SITE} fill="url(#site-light)" />
                    <polygon points={SITE} fill="none" stroke="#e5a63a" strokeWidth={4} strokeLinejoin="round" />
                    {/* Parcelas */}
                    {PARCELS.map((p, i) => (
                      <polygon key={i} points={p} fill="rgba(255,255,255,0.06)" stroke="#2c5a1f" strokeWidth={2} strokeDasharray="5 5" strokeLinejoin="round" />
                    ))}
                    {/* Vías */}
                    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ROAD_V} stroke="#3a3f3a" strokeWidth={16} />
                      <path d={ROAD_H} stroke="#3a3f3a" strokeWidth={16} />
                      <path d={ROAD_V} stroke="#e8e2c5" strokeWidth={1.2} strokeDasharray="8 8" />
                      <path d={ROAD_H} stroke="#e8e2c5" strokeWidth={1.2} strokeDasharray="8 8" />
                      <circle cx={300} cy={85} r={22} fill="#3a3f3a" />
                      <circle cx={300} cy={85} r={9} fill="#8fbb4e" />
                      <circle cx={300} cy={690} r={22} fill="#3a3f3a" />
                      <circle cx={300} cy={690} r={9} fill="#8fbb4e" />
                      <circle cx={300} cy={390} r={8} fill="#d8c86a" />
                    </g>
                    <rect x={430} y={28} width={140} height={30} rx={6} fill="rgba(0,0,0,0.55)" />
                    <text x={500} y={48} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff" letterSpacing={1}>
                      PROYECTO DEMO
                    </text>
                  </svg>

                  {/* Marcadores */}
                  <AnimatePresence>
                    {placed.map((l) => {
                      const isSel = l.id === selectedId;
                      const dim = filter !== null && filter !== l.status;
                      return (
                        <motion.div
                          key={l.id}
                          className="absolute z-10"
                          style={{ left: `${l.pos!.x}%`, top: `${l.pos!.y}%` }}
                          initial={{ scale: reduce ? 1 : 0.3, opacity: 0 }}
                          animate={{ scale: 1, opacity: dim ? 0.3 : 1 }}
                          exit={{ scale: reduce ? 1 : 0.3, opacity: 0, transition: { duration: 0.15 } }}
                          transition={{ duration: 0.35, ease: EASE }}
                        >
                          {isSel && (
                            <span
                              aria-hidden="true"
                              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-400/80"
                              style={{ animation: reduce ? undefined : "pulse-ring 2.2s ease-out infinite" }}
                            />
                          )}
                          {isSel && (
                            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+22px)] whitespace-nowrap rounded-md border-2 border-brand-500 bg-panel px-2.5 py-1 text-xs font-bold text-ink shadow-[var(--shadow-card)]">
                              Lote {l.id} · Etapa {l.etapa}
                            </span>
                          )}
                          <button
                            type="button"
                            onPointerDown={(e) => onMarkerDown(e, l.id)}
                            onPointerMove={onMarkerMove}
                            onPointerUp={onMarkerUp}
                            onClick={(e) => e.stopPropagation()}
                            onPointerUpCapture={() => mode === "venta" && setSaleId(l.id)}
                            aria-label={`Lote ${l.id}, ${STATUS[l.status].label}`}
                            aria-pressed={isSel}
                            className={`relative flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none items-center justify-center rounded-full text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.35)] ring-2 transition-[background-color] duration-200 active:cursor-grabbing sm:h-9 sm:w-9 sm:text-[11px] ${
                              isSel ? "ring-brand-500" : "ring-white"
                            }`}
                            style={{ backgroundColor: STATUS[l.status].color }}
                          >
                            {num(l.id)}
                          </button>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Pista de colocación */}
              <AnimatePresence>
                {mode === "asignacion" && selected && !selected.pos && (
                  <motion.p
                    key="hint"
                    initial={{ opacity: 0, y: reduce ? 0 : -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    className="absolute left-3 top-3 flex max-w-[70%] items-center gap-2 rounded-lg bg-ink/85 px-3 py-2 text-xs font-medium text-white shadow-[var(--shadow-card)] backdrop-blur-sm sm:text-[13px]"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-300" aria-hidden="true" />
                    Haz clic en el plano para ubicar el lote {selected.id}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Zoom y reinicio */}
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg border border-line bg-panel/95 p-1 shadow-[var(--shadow-card)] backdrop-blur-sm">
                {fine && (
                <>
                <button type="button" onClick={() => setZoomIdx((z) => Math.min(ZOOMS.length - 1, z + 1))} disabled={zoomIdx === ZOOMS.length - 1} aria-label="Acercar" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-surface hover:text-ink disabled:opacity-40">
                  <Plus className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => setZoomIdx((z) => Math.max(0, z - 1))} disabled={zoomIdx === 0} aria-label="Alejar" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-surface hover:text-ink disabled:opacity-40">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-0.5 h-5 w-px bg-line" aria-hidden="true" />
                </>
                )}
                <button type="button" onClick={reset} className="flex h-8 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-ink-soft transition-colors hover:bg-surface hover:text-ink">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Reiniciar</span>
                </button>
              </div>

              {/* Leyenda con conteos (filtra) */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto">
                <div className="flex items-center gap-1 overflow-x-auto rounded-lg border border-line bg-panel/95 p-1 shadow-[var(--shadow-card)] backdrop-blur-sm no-scrollbar" role="group" aria-label="Filtrar por estado">
                  <button type="button" onClick={() => setFilter(null)} aria-pressed={filter === null} className={`flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors ${filter === null ? "bg-ink text-white" : "text-ink-soft hover:bg-surface hover:text-ink"}`}>
                    Todos <span className="tnum">{lots.length}</span>
                  </button>
                  {ORDER.map((s) => (
                    <button key={s} type="button" onClick={() => setFilter((f) => (f === s ? null : s))} aria-pressed={filter === s} className={`flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors ${filter === s ? "bg-surface text-ink ring-1 ring-inset ring-line-strong" : "text-ink-soft hover:bg-surface hover:text-ink"}`}>
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: STATUS[s].color }} />
                      {STATUS[s].label} <span className="text-ink-faint tnum">({counts[s]})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contador de ubicados */}
              <div className="absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-lg bg-ink/85 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:flex">
                <MapPin className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
                <span className="tnum">
                  {placed.length} / {lots.length}
                </span>
                ubicados
              </div>
            </div>
          </div>

          {/* ───────────── Panel de asignación ───────────── */}
          {mode === "asignacion" && (
          <aside className="flex flex-col gap-4 lg:self-start">
            {/* Móvil: tira compacta de lotes pendientes (la lista completa vive en escritorio) */}
            <div className="card p-3 lg:hidden">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">Lotes pendientes</p>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 tnum">{pending.length}</span>
              </div>
              {pending.length === 0 ? (
                <p className="mt-2 text-xs text-ink-soft">Todos los lotes están ubicados. Pasa a la vista de venta.</p>
              ) : (
                <div className="-mx-3 mt-2 flex gap-2 overflow-x-auto px-3 no-scrollbar">
                  {pending.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => select(l.id)}
                      aria-pressed={l.id === selectedId}
                      className={`flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-xs font-medium transition-colors ${
                        l.id === selectedId ? "border-brand-600 bg-brand-50 text-brand-800" : "border-line bg-panel text-ink"
                      }`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: STATUS[l.status].color }}>
                        {num(l.id)}
                      </span>
                      Lote {num(l.id)} · Etapa {l.etapa}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* En móvil la ficha solo aparece cuando hay un lote seleccionado */}
            <div className={`card lg:min-h-[330px] ${selected ? "" : "hidden lg:block"}`}>
              <div className="flex items-center justify-between border-b border-line-soft px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">Panel de asignación</p>
                <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-ink tnum">{placed.length} puntos</span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.12 } }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Lote seleccionado</p>
                        <p className="mt-0.5 text-base font-semibold text-ink">
                          Lote {selected.id} · Etapa {selected.etapa}
                        </p>
                      </div>
                      <button type="button" onClick={() => setSelectedId(null)} aria-label="Cerrar" className="-mr-1 -mt-1 rounded-md p-1 text-ink-faint transition-colors hover:bg-surface hover:text-ink">
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <dl className="mt-4 divide-y divide-line-soft text-sm">
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-ink-soft">Superficie</dt>
                        <dd className="font-medium text-ink tnum">{selected.area} m²</dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-ink-soft">Precio</dt>
                        <dd className="font-medium text-ink tnum">{fmtCOP(selected.price)}</dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-ink-soft">Estado</dt>
                        <dd className="flex items-center gap-1.5 font-medium text-ink">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: STATUS[selected.status].color }} />
                          {STATUS[selected.status].label}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <dt className="text-ink-soft">Posición</dt>
                        <dd className={`font-medium tnum ${selected.pos ? "text-disponible" : "text-ink-faint"}`}>
                          {selected.pos ? `Ubicado (X: ${Math.round(selected.pos.x * 10)}, Y: ${Math.round(selected.pos.y * 7.5)})` : "Sin ubicar"}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label="Cambiar estado">
                      {ORDER.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => update(selected.id, { status: s })}
                          aria-pressed={selected.status === s}
                          className={`flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium transition-colors ${
                            selected.status === s ? "border-ink bg-ink text-white" : "border-line bg-panel text-ink-soft hover:text-ink"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: STATUS[s].color }} />
                          {STATUS[s].label}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-2">
                      <button
                        type="button"
                        onClick={save}
                        disabled={!selected.pos || (!dirty && !saved)}
                        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-600 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
                      >
                        <Check className="h-4 w-4" aria-hidden="true" />
                        {saved ? "Posición guardada" : "Guardar posición"}
                      </button>
                      {selected.pos ? (
                        <button type="button" onClick={() => removeFromMap(selected.id)} className="flex h-10 items-center justify-center gap-2 rounded-lg border border-vendido/40 text-sm font-medium text-vendido transition-colors hover:bg-vendido/5">
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                          Quitar del mapa
                        </button>
                      ) : (
                        <p className="rounded-lg bg-surface px-3 py-2 text-center text-xs text-ink-soft">Haz clic en el plano para ubicarlo.</p>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.12 } }}
                    className="px-4 py-6 text-center text-sm text-ink-soft"
                  >
                    Selecciona un lote de la lista o un marcador del plano.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="card hidden min-h-0 flex-1 flex-col lg:flex">
              <div className="flex items-center justify-between px-4 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">Lotes</p>
                <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 tnum">{pending.length} pendientes</span>
              </div>
              <p className="px-4 pt-1 text-xs text-ink-soft">Elige un lote para colocarlo en el plano.</p>

              <div className="mx-4 mt-3 grid grid-cols-3 rounded-lg bg-surface p-1 text-xs font-medium" role="tablist">
                {(
                  [
                    ["pendientes", `Pendientes (${pending.length})`],
                    ["ubicados", `Ubicados (${placed.length})`],
                    ["todos", `Todos (${lots.length})`],
                  ] as const
                ).map(([key, label]) => (
                  <button key={key} type="button" role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={`h-8 rounded-md transition-colors ${tab === key ? "bg-panel text-ink shadow-[0_1px_2px_rgba(15,31,46,0.08)]" : "text-ink-soft hover:text-ink"}`}>
                    {label}
                  </button>
                ))}
              </div>

              <label className="relative mx-4 mt-3 block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-faint" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por lote o etapa…"
                  className="h-9 w-full rounded-lg border border-line bg-panel pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                />
              </label>

              <ul className="mt-3 max-h-64 divide-y divide-line-soft overflow-y-auto border-t border-line-soft lg:h-[232px]">
                {listed.length === 0 && (
                  <li className="px-4 py-6 text-center text-xs text-ink-soft">No hay lotes para mostrar con los filtros actuales.</li>
                )}
                {listed.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => select(l.id)}
                      aria-pressed={l.id === selectedId}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${l.id === selectedId ? "bg-brand-50" : "hover:bg-surface"}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white" style={{ backgroundColor: STATUS[l.status].color }}>
                        {num(l.id)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-ink">Lote {l.id}</span>
                        <span className="block text-xs text-ink-soft">
                          Etapa {l.etapa} · <span className="tnum">{l.area} m²</span>
                        </span>
                      </span>
                      <span className={`shrink-0 text-[11px] font-medium ${l.pos ? "text-disponible" : "text-ink-faint"}`}>
                        {l.pos ? "Ubicado" : "Pendiente"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          )}
        </div>

        {/* Ficha de venta (modo venta) */}
        <AnimatePresence>
          {saleLot && (
            <motion.div
              key="sale-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="fixed inset-0 z-[60] flex items-end justify-center overscroll-contain bg-ink/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              onMouseDown={(e) => e.target === e.currentTarget && setSaleId(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`Lote ${saleLot.id}`}
                initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduce ? 0 : 16, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, ease: EASE }}
                className="card flex max-h-[92dvh] w-full max-w-[640px] flex-col overflow-hidden rounded-b-none touch-pan-y sm:rounded-b-2xl"
              >
                {/* Cabecera */}
                <div className="flex items-start justify-between gap-3 border-b border-line-soft px-5 py-4 sm:px-6">
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-ink">Lote {saleLot.id}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-ink-soft">
                      <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                      <span className="font-medium text-brand-700">Proyecto demo</span>
                      <span aria-hidden="true">›</span>
                      <span>Etapa {saleLot.etapa}</span>
                      <span className="font-mono text-ink-faint">{saleLot.id.toLowerCase().replace("demo-", "7a")}f{saleLot.etapa}b</span>
                      <Copy className="h-3 w-3 text-ink-faint" aria-hidden="true" />
                    </p>
                  </div>
                  <button type="button" onClick={() => setSaleId(null)} aria-label="Cerrar ficha" className="-mr-1 -mt-1 rounded-md p-1.5 text-ink-faint transition-colors hover:bg-surface hover:text-ink">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6">
                  {/* Estado y precio */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface px-4 py-3.5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Estado actual</p>
                      <span
                        className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-sm font-medium"
                        style={{
                          borderColor: STATUS[saleLot.status].color,
                          color: STATUS[saleLot.status].color,
                          backgroundColor: `color-mix(in srgb, ${STATUS[saleLot.status].color} 10%, white)`,
                        }}
                      >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: STATUS[saleLot.status].color }} />
                        {STATUS[saleLot.status].label}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Precio de venta</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-ink tnum sm:text-[1.75rem]">{fmtCOP(saleLot.price)}</p>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Ubicación en el proyecto</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {[
                      { Icon: MapPin, label: "Proyecto", value: "Proyecto demo" },
                      { Icon: Layers, label: "Etapa / Sector", value: `Etapa ${saleLot.etapa}` },
                    ].map((c) => (
                      <div key={c.label} className="flex items-center gap-3 rounded-xl border border-line px-3.5 py-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-ink-soft">
                          <c.Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-ink-soft">{c.label}</span>
                          <span className="block truncate text-sm font-semibold text-ink">{c.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSaleId(null);
                      setSelectedId(saleLot.id);
                    }}
                    className="mt-2 flex w-full items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-surface"
                  >
                    <span className="flex items-center gap-2 text-ink-soft">
                      <Map className="h-4 w-4" aria-hidden="true" />
                      Lote ubicado en el plano de urbanismo
                    </span>
                    <span className="link-arrow text-sm">Ver en plano</span>
                  </button>

                  {/* Terreno */}
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Características del terreno</p>
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-line px-3.5 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-ink-soft">
                      <Square className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-soft">Área</span>
                      <span className="block text-sm font-semibold text-ink tnum">{saleLot.area} m²</span>
                    </span>
                  </div>

                  {/* Herramientas */}
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-faint">Herramientas del lote</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {[
                      { Icon: Calculator, title: "Simular financiación", detail: "Calcular cuotas y planes" },
                      { Icon: Sparkles, title: "Preguntar al asistente", detail: "Consultar datos y normativa" },
                    ].map((t) => (
                      <div key={t.title} className="flex items-center gap-3 rounded-xl border border-line px-3.5 py-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          <t.Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">{t.title}</span>
                          <span className="block truncate text-xs text-ink-soft">{t.detail}</span>
                        </span>
                        <span className="text-ink-faint" aria-hidden="true">›</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line-soft px-5 py-3.5 sm:px-6">
                  <button type="button" onClick={() => setSaleId(null)} className="h-10 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:bg-surface">
                    Cerrar
                  </button>
                  <div className="flex gap-2">
                    {saleLot.status === "disponible" && (
                      <button type="button" onClick={() => update(saleLot.id, { status: "reservado" })} className="h-10 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:bg-surface">
                        Reservar
                      </button>
                    )}
                    {saleLot.status === "reservado" && (
                      <button type="button" onClick={() => update(saleLot.id, { status: "disponible" })} className="h-10 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:bg-surface">
                        Liberar
                      </button>
                    )}
                    {(saleLot.status === "disponible" || saleLot.status === "reservado") && (
                      <button type="button" onClick={() => update(saleLot.id, { status: "vendido" })} className="h-10 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700">
                        Registrar venta
                      </button>
                    )}
                    {(saleLot.status === "vendido" || saleLot.status === "bloqueado") && (
                      <button type="button" onClick={() => update(saleLot.id, { status: "disponible" })} className="h-10 rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700">
                        Volver a disponible
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-4 text-sm text-ink-faint">
          Demo con datos ficticios. En Parcy el plano es el de tu proyecto, con tus etapas y tus
          precios.
        </p>
      </div>
    </section>
  );
}
