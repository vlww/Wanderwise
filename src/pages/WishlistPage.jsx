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

/* dropdown (reudesed from destination finder) */
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

