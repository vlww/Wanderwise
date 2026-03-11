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

  
}