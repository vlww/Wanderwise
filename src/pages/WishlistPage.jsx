import { useState, useRef, useEffect } from "react";
import { HeartIcon, ImageIcon } from "../components/Icons";
import {
  BUDGET_OPTIONS, DURATION_OPTIONS, INTEREST_OPTIONS, ALL_DESTINATIONS, PER_PAGE,
} from "../data/initialData";
import "../styles/wishlist.css";

const LABEL_OPTIONS = ["Favorite", "Maybe", "Too Expensive"];

const LABEL_COLORS = {
  Favorite:     { bg:"rgba(232,113,74,.12)", border:"#E8714A", text:"#C05030" },
  Maybe:        { bg:"rgba(180,150,40,.12)", border:"#B8960A", text:"#8A7000" },
  "Too Expensive": { bg:"rgba(44,95,138,.10)", border:"#4A8BB5", text:"#2C5F8A" },
};

/* dropdowns (reused from destinationfinder) */
function Dropdown({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="df-dropdown" ref={ref}>
      <button className={`df-dropdown-btn${open ? " open" : ""}${value && value !== label ? " has-value" : ""}`} onClick={() => setOpen(o => !o)}>
        <span>{value || label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="df-dropdown-menu">
          {options.map(opt => {
            const lbl = typeof opt === "string" ? opt : opt.label;
            return (
              <button key={lbl} className={`df-dropdown-item${value === lbl ? " active" : ""}`}
                onClick={() => { onChange(lbl); setOpen(false); }}>
                {lbl}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function InterestDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const toggle = i => onChange(selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i]);
  const label = selected.length === 0 ? "Interests" : selected.length === 1 ? selected[0] : `${selected.length} selected`;
  return (
    <div className="df-dropdown" ref={ref}>
      <button className={`df-dropdown-btn${open ? " open" : ""}${selected.length > 0 ? " has-value" : ""}`} onClick={() => setOpen(o => !o)}>
        <span>{label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="df-dropdown-menu interest-menu">
          {INTEREST_OPTIONS.map(i => (
            <button key={i} className={`df-dropdown-item${selected.includes(i) ? " active" : ""}`} onClick={() => toggle(i)}>
              {selected.includes(i) && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{width:14,height:14,marginRight:6,flexShrink:0}}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
              {i}
            </button>
          ))}
          {selected.length > 0 && (
            <button className="df-dropdown-clear" onClick={() => onChange([])}>Clear all</button>
          )}
        </div>
      )}
    </div>
  );
}

function LabelDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const colors = value ? LABEL_COLORS[value] : null;
  return (
    <div className="wl-label-wrap" ref={ref}>
      <button
        className={`wl-label-btn${open ? " open" : ""}`}
        style={colors ? { background: colors.bg, borderColor: colors.border, color: colors.text } : {}}
        onClick={() => setOpen(o => !o)}
      >
        <span>{value || "Add label"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{width:13,height:13,flexShrink:0}}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="wl-label-menu">
          {LABEL_OPTIONS.map(opt => {
            const c = LABEL_COLORS[opt];
            return (
              <button key={opt}
                className={`wl-label-item${value === opt ? " active" : ""}`}
                style={{ color: c.text }}
                onClick={() => { onChange(opt); setOpen(false); }}>
                {opt}
              </button>
            );
          })}
          {value && (
            <button className="df-dropdown-clear" onClick={() => { onChange(null); setOpen(false); }}>Remove label</button>
          )}
        </div>
      )}
    </div>
  );
}

/* main page */
export default function WishlistPage({ wishlist, setWishlist }) {
  const [meta, setMeta] = useState(() =>
    Object.fromEntries(wishlist.map(w => [w.id, { note: "", label: "Favorite" }]))
  );
  const [editingNote, setEditingNote] = useState(null);
  const [draftNote,   setDraftNote]   = useState("");

  const [budget,    setBudget]    = useState("Any Budget");
  const [duration,  setDuration]  = useState("Any Duration");
  const [interests, setInterests] = useState([]);
  const [activeFilters, setActiveFilters] = useState(null); 

  const [page, setPage] = useState(1);

  useEffect(() => {
    setMeta(prev => {
      const next = { ...prev };
      wishlist.forEach(w => { if (!next[w.id]) next[w.id] = { note: "", label: "Favorite" }; });
      return next;
    });
  }, [wishlist]);

  const setLabel = (id, label) =>
    setMeta(prev => ({ ...prev, [id]: { ...prev[id], label } }));

  const saveNote = (id) => {
    setMeta(prev => ({ ...prev, [id]: { ...prev[id], note: draftNote } }));
    setEditingNote(null);
  };

  const removeFromWishlist = (id) => {
    setWishlist(ws => ws.filter(w => w.id !== id));
    setMeta(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  const applyFilters = () => {
    setActiveFilters({ budget, duration, interests: [...interests] });
    setPage(1);
  };

  const clearFilters = () => {
    setBudget("Any Budget");
    setDuration("Any Duration");
    setInterests([]);
    setActiveFilters(null);
    setPage(1);
  };

  const enriched = wishlist.map(w => {
    const full = ALL_DESTINATIONS.find(d => d.name === w.name && d.country === w.country);
    return { ...w, interests: full?.interests || [], duration: full?.duration || "week" };
  });

  const filtered = activeFilters ? enriched.filter(dest => {
    const bOpt = BUDGET_OPTIONS.find(b => b.label === activeFilters.budget) || BUDGET_OPTIONS[0];
    const dVal = DURATION_OPTIONS.find(d => d.label === activeFilters.duration)?.value || "any";
    const mB = dest.cost >= bOpt.min && dest.cost <= bOpt.max;
    const mD = dVal === "any" || dest.duration === dVal;
    const mI = activeFilters.interests.length === 0 || activeFilters.interests.some(i => dest.interests.includes(i));
    return mB && mD && mI;
  }) : enriched;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage   = Math.min(page, totalPages);
  const paginated  = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const fmt = n => Number(n).toLocaleString("en-US", { minimumFractionDigits:2, maximumFractionDigits:2 });

  return (
    <div className="page">
      <div className="greeting">
        <h1 className="greeting-logo">Wishlist</h1>
        <p>Organise and plan your saved destinations.</p>
      </div>

      <div className="wl-wrap">

      </div>
    </div>
  );
}
