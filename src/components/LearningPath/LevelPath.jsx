import { motion } from "framer-motion";
import {
  Star,
  BookOpen,
  Dumbbell,
  Trophy,
  Lock,
  FastForward,
  Shield,
  Brain,
  Heart,
  Music,
  Code,
  Rocket,
  MapPin,
  Sparkles,
  Globe,
  Hammer,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  GLOBAL TWEAK POINTS                                               */
/* ------------------------------------------------------------------ */
const NODE_REM = 5;           // node diameter
const STEP_Y   = 7;           // vertical distance between successive nodes
const STEP_X   = NODE_REM;    // horizontal unit shift
const PATH_CLR = "#cbd5e1";   // spiral colour  (slate-300)

const r2px = (r) => r * 16;   // helper: rem → px for SVG only

/* ------------------------------------------------------------------ */
/*  SpiralConnector – dashed cubic-bezier “swirl” between two nodes   */
/* ------------------------------------------------------------------ */
function SpiralConnector({ fromXRem, toXRem }) {
  if (toXRem === null || toXRem === undefined) return null;

  /* geometry in *rem* first --------------------------------------- */
  const dxRem = toXRem - fromXRem;          // horizontal delta
  const sign  = dxRem >= 0 ? 1 : -1;        // left / right
  const sweep = Math.abs(dxRem) + NODE_REM; // width so the arc clears nodes

  const w = r2px(sweep);                    // SVG width  (px)
  const h = r2px(STEP_Y);                   // SVG height (px)

  /* convert node radius once (px) --------------------------------- */
  const R = r2px(NODE_REM * 0.5);

  /* start  : bottom-centre of current node (offset inside SVG)      */
  /* end    : top-centre of next node                                */
  const startX = sign === 1 ? R : w - R;
  const endX   = sign === 1 ? w - R : R;
  const startY = 0;
  const endY   = h;

  /* two control points create a nice ‘S’ swirl                      */
  const cp1x = startX + sign * w * 0.25;
  const cp1y = h * 0.15;
  const cp2x = endX   - sign * w * 0.25;
  const cp2y = h * 0.85;

  const d = `M${startX} ${startY}
             C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${endX} ${endY}`;

  return (
    <svg
      width={w}
      height={h}
      className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] pointer-events-none"
    >
      <motion.path
        d={d}
        fill="none"
        stroke={PATH_CLR}
        strokeWidth={4}
        strokeDasharray="6 10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  AnimatedDashedBorder – spins slowly for a subtle motion cue       */
/* ------------------------------------------------------------------ */
function AnimatedDashedBorder() {
  /* a circle that just fits inside the button */
  const sizePx = r2px(NODE_REM) - 3;
  const r = sizePx / 2 - 8;   // minus stroke width

  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, ease: "linear", repeat: Infinity }}
    >
      <svg width={sizePx} height={sizePx}>
        <circle
          r={r}
          cx={sizePx / 2}
          cy={sizePx / 2 }
          fill="none"
          stroke={PATH_CLR}
          strokeWidth={4}
          strokeDasharray="1 14"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProgressRing – green progress arc for the *current* node          */
/* ------------------------------------------------------------------ */
function ProgressRing({ pct = 0 }) {
  const r = r2px(NODE_REM * 0.5 - 0.35);
  const stroke = 4;
  const C = 2 * Math.PI * r;
  const offset = C - pct * C;

  return (
    <svg width={r * 2} height={r * 2} className="-rotate-90">
      <circle
        r={r -2}
        cx={r}
        cy={r}
        stroke="#e2e8f0"
        strokeWidth={stroke}
        fill="transparent"
      />
      <motion.circle
        r={r - 1.3}
        cx={r}
        cy={r}
        stroke="#16a34a"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${C} ${C}`}
        initial={{ strokeDashoffset: C }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        fill="transparent"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  LevelNode – icon, spinning dashed ring, progress & states         */
/* ------------------------------------------------------------------ */
const IconMap = {
  star: Star,
  book: BookOpen,
  dumbbell: Dumbbell,
  trophy: Trophy,
  chest: Lock,          // visualised with the “Lock” glyph
  /* new additions ⬇︎ */
  shield: Shield,
  brain: Brain,
  heart: Heart,
  music: Music,
  code: Code,
  rocket: Rocket,
  map: MapPin,
  sparkles: Sparkles,
  globe: Globe,
  hammer: Hammer,
};

function LevelNode({ lvl, onClick }) {
  const Icon = IconMap[lvl.type] || Star;

  const isCurrent = lvl.status === "current";
  const isDone    = lvl.status === "completed";
  const isLocked  = lvl.status === "locked";

  const fg = isDone ? "#ffffff" : isCurrent ? "#16a34a" : "#64748b";
  const bg = isDone ? "bg-green-600" : "bg-white";

  return (
    <motion.button
      disabled={isLocked}
      onClick={() => onClick?.(lvl)}
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative flex items-center justify-center rounded-full w-[${NODE_REM}rem] h-[${NODE_REM}rem] ${bg} shadow-xl`}
    >
      {/* spinning dashed border */}
      {isLocked && <AnimatedDashedBorder />}

      {/* progress arc */}
      {isCurrent && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ProgressRing pct={lvl.progress ?? 0} />
        </div>
      )}

      {/* icon */}
      <Icon size={32} color={fg} className="z-10" />
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  JumpNode – coloured fast-forward                                 */
/* ------------------------------------------------------------------ */
function JumpNode({ color = "#15803d" /* emerald-700 */ }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-xs font-semibold mb-1 text-center text-slate-600 select-none">
        JUMP&nbsp;HERE?
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center rounded-full w-[5rem] h-[5rem]"
        style={{ backgroundColor: color }}
      >
        <FastForward color="#fff" size={34} />
      </motion.button>
    </motion.div>
  );
}

/* ------------------------------------------------------------- */
/*  NodeConnector – draws a spiral-ish dashed path from          */
/*  current node’s bottom-centre to the next node’s top-centre   */
/* ------------------------------------------------------------- */
function NodeConnector({ fromXRem, toXRem }) {
  const dxRem = toXRem - fromXRem;
  if (Number.isNaN(dxRem)) return null;

  const widthRem  = Math.abs(dxRem) || 0.001; // avoid zero-width SVG
  const heightRem = STEP_Y;
  const w = r2px(widthRem);
  const h = r2px(heightRem);

  // SVG origin sits at the *min* x so we shift start/end accordingly
  const startX = dxRem > 0 ? 0 : w;
  const endX   = dxRem > 0 ? w : 0;
  const midX   = (startX + endX) / 2;
  const ctrlY  = h * 0.45;   // control point for the curve

  const pathD =
    dxRem === 0
      ? `M${startX} 0 V${h}`                         // straight down
      : `M${startX} 0 Q${midX} ${ctrlY} ${endX} ${h}`; // gentle arc

  return (
    <svg
      width={w}
      height={h}
      className="absolute -bottom-20 -translate-x-1/2 -bottom-[1px] pointer-events-none"
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke={PATH_CLR}
        strokeWidth={4}
        strokeDasharray="6 10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SegmentFigure – decorative mascot beside a segment                */
/* ------------------------------------------------------------------ */
function SegmentFigure({ src, side }) {
  return (
    <img
      src={src}
      alt=""
      className={`w-60 h-60 pointer-events-none absolute top-0 ${
        side === "right" ? "left-full ml-4" : "right-full mr-4"
      }`}
      draggable={false}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  MultiSegmentPath – orchestrates it all                            */
/* ------------------------------------------------------------------ */
export default function MultiSegmentPath({ segments }) {
  /* Offset pattern for a tighter “spiral” feel                      */
  const base = [2.5, 1.5, 0, -1.5, -2.5];

  return (
    <div className="relative flex flex-col items-center py-20 pb-32">
      {segments.map((seg, si) => {
        const flip = si % 2 === 1 ? -1 : 1;          // mirror every other segment
        const offsets = base.map((v) => v * flip * STEP_X);
        const figSide = flip === 1 ? "left" : "right";

        return (
          <div key={seg.id} className="relative">
            {seg.figure && <SegmentFigure src={seg.figure} side={figSide} />}

            {/* STACK OF NODES IN THIS SEGMENT ----------------------- */}
            <div
              className="flex flex-col items-center"
              style={{ gap: `${STEP_Y}rem` }}
            >
              {seg.levels.map((node, i) => {
                /* jump-ahead button --------------------------------- */
                if (node.type === "jump") {
                  return (
                    <JumpNode
                      key={node.id}
                      color={seg.jumpColor ?? "#15803d"}
                    />
                  );
                }

                /* regular level node -------------------------------- */
                const lvl   = node;
                const xRem  = offsets[i % offsets.length];
                const next  = seg.levels[i + 1];
                const nextXRem =
                  next && next.type !== "jump"
                    ? offsets[(i + 1) % offsets.length]
                    : null;

                return (
                  <div
                    key={lvl.id}
                    className="relative"
                    style={{ transform: `translateX(${xRem}rem)` }}
                  >
                    <LevelNode lvl={lvl} />

                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
