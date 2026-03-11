import { useState, useRef, useEffect } from "react";
import "../styles/wishlist.css";
import { ImageIcon, HeartIcon } from '../components/Icons';
import { ALL_DESTINATIONS, BUDGET_OPTIONS, DURATION_OPTIONS, INTEREST_OPTIONS, PER_PAGE } from '../data/initialData';

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
            return <button key={lbl} className={`df-dropdown-item${value === lbl ? " active" : ""}`} onClick={() => { onChange(lbl); setOpen(false); }}>{lbl}</button>;
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
              {selected.includes(i) && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, marginRight: 6, flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>}
              {i}
            </button>
          ))}
          {selected.length > 0 && <button className="df-dropdown-clear" onClick={() => onChange([])}>Clear all</button>}
        </div>
      )}
    </div>
  );
}

function LabelDropdown({ value, onChange, onOpenChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const setOpenTracked = val => { setOpen(val); onOpenChange && onOpenChange(val); };
  useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpenTracked(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const colors = value ? LABEL_COLORS[value] : null;
  return (
    <div className="wl-label-wrap" ref={ref} style={{ position: "relative", zIndex: open ? 500 : 200 }}>
      <button
        className={`wl-label-btn${open ? " open" : ""}`}
        style={colors ? { background: colors.bg, borderColor: colors.border, color: colors.text } : {}}
        onClick={() => setOpenTracked(!open)}
      >
        <span>{value || "Add label"}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 13, height: 13, flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div className="wl-label-menu" style={{ position: "absolute", top: "calc(100% + 6px)", right: 0, left: "auto", zIndex: 500 }}>
          {LABEL_OPTIONS.map(opt => {
            const c = LABEL_COLORS[opt];
            return (
              <button key={opt} className={`wl-label-item${value === opt ? " active" : ""}`} style={{ color: c.text }}
                onClick={() => { onChange(opt); setOpenTracked(false); }}>
                {opt}
              </button>
            );
          })}
          {value && <button className="df-dropdown-clear" onClick={() => { onChange(null); setOpenTracked(false); }}>Remove label</button>}
        </div>
      )}
    </div>
  );
}

/* main page */
export default function WishlistPage({ wishlist, setWishlist }) {
  const [editingNote, setEditingNote] = useState(null);
  const [draftNote, setDraftNote] = useState("");
  const [budget, setBudget] = useState("Any Budget");
  const [duration, setDuration] = useState("Any Duration");
  const [interests, setInterests] = useState([]);
  const [activeFilters, setActiveFilters] = useState(null);
  const [page, setPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    setMeta(prev => {
      const next = { ...prev };
      wishlist.forEach(w => { if (!next[w.id]) next[w.id] = { note: "", label: "Favorite" }; });
      return next;
    });
  }, [wishlist]);

  const setLabel = (id, label) => setMeta(prev => ({ ...prev, [id]: { ...prev[id], label } }));
  const saveNote = id => { setMeta(prev => ({ ...prev, [id]: { ...prev[id], note: draftNote } })); setEditingNote(null); };
  const removeFromWishlist = id => { setWishlist(ws => ws.filter(w => w.id !== id)); setMeta(prev => { const n = { ...prev }; delete n[id]; return n; }); };
  const applyFilters = () => { setActiveFilters({ budget, duration, interests: [...interests] }); setPage(1); };
  const clearFilters = () => { setBudget("Any Budget"); setDuration("Any Duration"); setInterests([]); setActiveFilters(null); setPage(1); };

  const enriched = wishlist.map(w => {
    const full = ALL_DESTINATIONS.find(d => d.name === w.name && d.country === w.country);
    return { ...w, interests: full?.interests || [], duration: full?.duration || "week" };
  });

  const filtered = activeFilters ? enriched.filter(dest => {
    const bOpt = BUDGET_OPTIONS.find(b => b.label === activeFilters.budget) || BUDGET_OPTIONS[0];
    const dVal = DURATION_OPTIONS.find(d => d.label === activeFilters.duration)?.value || "any";
    return dest.cost >= bOpt.min && dest.cost <= bOpt.max &&
      (dVal === "any" || dest.duration === dVal) &&
      (activeFilters.interests.length === 0 || activeFilters.interests.some(i => dest.interests.includes(i)));
  }) : enriched;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
  const fmt = n => Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="page">
      <div className="greeting">
        <h1 className="greeting-logo">Wishlist</h1>
        <p>Organise and plan your saved destinations.</p>
      </div>

      <div className="wl-wrap">
        {/* filter bar */}
        <div className="wl-filter-bar">
          <div className="wl-filter-left">
            <Dropdown label="Budget"   value={budget}   onChange={setBudget}   options={BUDGET_OPTIONS}/>
            <Dropdown label="Duration" value={duration} onChange={setDuration} options={DURATION_OPTIONS}/>
            <InterestDropdown selected={interests} onChange={setInterests}/>
          </div>
          <div className="wl-filter-right">
            {activeFilters && (
              <button className="wl-clear-btn" onClick={clearFilters}>Clear</button>
            )}
            <button className="wl-filter-btn" onClick={applyFilters}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}>
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              Filter
            </button>
          </div>
        </div>

        {activeFilters && (
          <div className="wl-filter-notice">
            Showing <strong>{filtered.length}</strong> of <strong>{wishlist.length}</strong> destinations — filters active
          </div>
        )}

        {/* table */}
        {wishlist.length === 0 ? (
          <div className="df-empty-state">
            <div className="df-empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <p>Your wishlist is empty. Use the <strong>Destination Finder</strong> to add destinations!</p>
          </div>
        ) : (
          <>
            <div className="wl-table">
              {/* header */}
              <div className="wl-header">
                <div className="wl-col-dest">Destination</div>
                <div className="wl-col-notes">Notes</div>
                <div className="wl-col-labels">Labels</div>
              </div>

              {/* rows */}
              {paginated.length === 0 ? (
                <div className="wl-no-results">No destinations match the active filters.</div>
              ) : (
                paginated.map((dest, i) => {
                  const m = meta[dest.id] || { note: "", label: "Favorite" };
                  const isEditing = editingNote === dest.id;
                  return (
                    <div className="wl-row" key={dest.id} style={{animationDelay:`${i*0.06}s`}}>

                      <div className="wl-col-dest">
                        <div className="wl-dest-inner">
                          {dest.img
                            ? <img className="wl-img" src={dest.img} alt={dest.name} onError={e=>{e.target.style.display="none";}}/>
                            : <div className="wl-img-placeholder"><ImageIcon/></div>
                          }
                          <div className="wl-dest-info">
                            <div className="wl-dest-name">{dest.name}</div>
                            <div className="wl-dest-country">{dest.country}</div>
                            <div className="wl-dest-cost">${fmt(dest.cost)}</div>
                          </div>
                        </div>
                      </div>

                      {/* notes */}
                      <div className="wl-col-notes">
                        {isEditing ? (
                          <textarea
                            className="wl-note-input"
                            value={draftNote}
                            onChange={e => setDraftNote(e.target.value)}
                            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveNote(dest.id); }}}
                            onBlur={() => saveNote(dest.id)}
                            autoFocus
                            placeholder="Add a note… (Enter to save)"
                          />
                        ) : (
                          <div
                            className={`wl-note-display${!m.note ? " empty" : ""}`}
                            onClick={() => { setEditingNote(dest.id); setDraftNote(m.note); }}
                            title="Click to edit"
                          >
                            {m.note || "Click to add a note…"}
                          </div>
                        )}
                      </div>

                      {/* labels */}
                      <div className="wl-col-labels">
                        <LabelDropdown value={m.label} onChange={val => setLabel(dest.id, val)}/>
                        <button
                          className="wl-remove-btn"
                          onClick={() => removeFromWishlist(dest.id)}
                          title="Remove from wishlist"
                        >
                          <HeartIcon filled={true}/>
                        </button>
                      </div>

                    </div>
                  );
                })
              )}
            </div>

          </>
        )}
      </div>
    </div>
  );
}
