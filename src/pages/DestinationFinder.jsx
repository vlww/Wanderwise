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
