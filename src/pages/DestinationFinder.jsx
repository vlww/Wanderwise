import { useState, useRef, useEffect } from "react";
import { SearchIcon, HeartIcon, ImageIcon, TagIcon } from "../components/Icons";
import {
  ALL_DESTINATIONS, BUDGET_OPTIONS, DURATION_OPTIONS,
  INTEREST_OPTIONS, PER_PAGE,
} from "../data/initialData";
import "../styles/destination-finder.css";

/* dropdown */
function Dropdown({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="df-dropdown" ref={ref}>
      <button className={`df-dropdown-btn${open ? " open" : ""}`} onClick={() => setOpen(o => !o)}>
        <span>{value || label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="df-dropdown-menu">
          {options.map((opt) => {
            const optLabel = typeof opt === "string" ? opt : opt.label;
            const isActive = value === optLabel;
            return (
              <button
                key={optLabel}
                className={`df-dropdown-item${isActive ? " active" : ""}`}
                onClick={() => { onChange(optLabel); setOpen(false); }}
              >
                {optLabel}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* multi select dropdown (for interests) */
function InterestDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (interest) => {
    onChange(
      selected.includes(interest)
        ? selected.filter(i => i !== interest)
        : [...selected, interest]
    );
  };

  const label = selected.length === 0
    ? "Interests"
    : selected.length === 1
      ? selected[0]
      : `${selected.length} selected`;

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
          {INTEREST_OPTIONS.map((interest) => (
            <button
              key={interest}
              className={`df-dropdown-item${selected.includes(interest) ? " active" : ""}`}
              onClick={() => toggle(interest)}
            >
              {selected.includes(interest) && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,marginRight:6,flexShrink:0}}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
              {interest}
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

/* main page */
export default function DestinationFinder({ wishlist, setWishlist }) {
  const [query,        setQuery]        = useState("");
  const [budget,       setBudget]       = useState("Any Budget");
  const [duration,     setDuration]     = useState("Any Duration");
  const [interests,    setInterests]    = useState([]);
  const [results,      setResults]      = useState(null); 
  const [page,         setPage]         = useState(1);

  const wishlistIds = new Set(wishlist.map(w => w.name + "|" + w.country));

  const runSearch = () => {
    const budgetOpt   = BUDGET_OPTIONS.find(b => b.label === budget) || BUDGET_OPTIONS[0];
    const durationVal = DURATION_OPTIONS.find(d => d.label === duration)?.value || "any";

    const filtered = ALL_DESTINATIONS.filter(dest => {
      const matchQuery    = query.trim() === "" ||
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.country.toLowerCase().includes(query.toLowerCase());
      const matchBudget   = dest.cost >= budgetOpt.min && dest.cost <= budgetOpt.max;
      const matchDuration = durationVal === "any" || dest.duration === durationVal;
      const matchInterest = interests.length === 0 ||
        interests.some(i => dest.interests.includes(i));
      return matchQuery && matchBudget && matchDuration && matchInterest;
    });

    setResults(filtered);
    setPage(1);
  };

  const toggleWishlist = (dest) => {
    const key = dest.name + "|" + dest.country;
    if (wishlistIds.has(key)) {
      setWishlist(ws => ws.filter(w => !(w.name === dest.name && w.country === dest.country)));
    } else {
      setWishlist(ws => [...ws, {
        id: dest.id, name: dest.name, country: dest.country,
        cost: dest.cost, fav: true, img: dest.img,
      }]);
    }
  };

  const totalPages = results ? Math.ceil(results.length / PER_PAGE) : 0;
  const paginated  = results ? results.slice((page - 1) * PER_PAGE, page * PER_PAGE) : [];
  const fmt = n => Number(n).toLocaleString("en-US", { minimumFractionDigits:2, maximumFractionDigits:2 });

  return (
    <div className="page">
      <div className="greeting">
        <h1 className="greeting-logo">Destination Finder</h1>
      </div>

      <div className="df-wrap">
        <div className="df-filters">
          <div className="df-search-wrap">
            <SearchIcon />
            <input
              className="df-search"
              placeholder="Search destinations"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && runSearch()}
            />
          </div>
          <Dropdown
            label="Budget"
            value={budget}
            onChange={setBudget}
            options={BUDGET_OPTIONS}
          />
          <Dropdown
            label="Duration"
            value={duration}
            onChange={setDuration}
            options={DURATION_OPTIONS}
          />
          <InterestDropdown selected={interests} onChange={setInterests} />
        </div>

        
      </div>
    </div>
  );
}
