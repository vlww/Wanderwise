import { useState, useRef, useEffect } from "react";
import "../styles/destination-finder.css";
import { SearchIcon, ImageIcon, HeartIcon } from '../components/Icons';
import { ALL_DESTINATIONS, BUDGET_OPTIONS, DURATION_OPTIONS, INTEREST_OPTIONS, PER_PAGE } from '../data/initialData';

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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div className="df-dropdown-menu">
          {options.map(opt => {
            const lbl = typeof opt === "string" ? opt : opt.label;
            return (
              <button key={lbl} className={`df-dropdown-item${value === lbl ? " active" : ""}`} onClick={() => { onChange(lbl); setOpen(false); }}>{lbl}</button>
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

  const toggle = i => onChange(selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i]);
    const label = selected.length === 0 ? "Interests" : selected.length === 1 ? selected[0] : `${selected.length} selected`;
    return (
      <div className="df-dropdown" ref={ref}>
        <button className={`df-dropdown-btn${open ? " open" : ""}${selected.length > 0 ? " has-value" : ""}`} onClick={() => setOpen(o => !o)}>
          <span>{label}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
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

function TagPopover({ tags, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="df-tag-popover" ref={ref}>
      <div className="df-tag-popover-title">All tags</div>
      {tags.map(tag => <span key={tag} className="df-tag">{tag}</span>)}
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
  const [openTagsId,   setOpenTagsId]   = useState(null);

  const wishlistIds = new Set(wishlist.map(w => w.name + "|" + w.country));

  const runSearch = () => {
    const bOpt = BUDGET_OPTIONS.find(b => b.label === budget) || BUDGET_OPTIONS[0];
    const dVal = DURATION_OPTIONS.find(d => d.label === duration)?.value || "any";
    const filtered = ALL_DESTINATIONS.filter(dest => {
      const mQ = query.trim() === "" || dest.name.toLowerCase().includes(query.toLowerCase()) || dest.country.toLowerCase().includes(query.toLowerCase());
      const mB = dest.cost >= bOpt.min && dest.cost <= bOpt.max;
      const mD = dVal === "any" || dest.duration === dVal;
      const mI = interests.length === 0 || interests.some(i => dest.interests.includes(i));
      return mQ && mB && mD && mI;
    });

    setResults(filtered);
    setPage(1);
  };

  const toggleWishlist = (dest) => {
    const key = dest.name + "|" + dest.country;
    if (wishlistIds.has(key)) setWishlist(ws => ws.filter(w => !(w.name === dest.name && w.country === dest.country)));
    else setWishlist(ws => [...ws, { id: dest.id, name: dest.name, country: dest.country, cost: dest.cost, fav: true, img: dest.img }]);
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
                  <input className="df-search" placeholder="Search destinations" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && runSearch()} />
                </div>
                <Dropdown label="Budget" value={budget} onChange={setBudget} options={BUDGET_OPTIONS} />
                <Dropdown label="Duration" value={duration} onChange={setDuration} options={DURATION_OPTIONS} />
                <InterestDropdown selected={interests} onChange={setInterests} />
              </div>
              <button className="df-search-btn" onClick={runSearch}><SearchIcon />Search for destinations!</button>
      
              {results === null ? (
                <div className="df-empty-state">
                  <div className="df-empty-icon"><SearchIcon /></div>
                  <p>Set your filters and hit <strong>Search for destinations!</strong> to get started.</p>
                </div>
              ) : results.length === 0 ? (
                <div className="df-empty-state">
                  <div className="df-empty-icon"><SearchIcon /></div>
                  <p>No destinations match your filters. Try adjusting your search.</p>
                </div>
              ) : (
                <>
                  <div className="df-results-label">Displaying <strong>{results.length}</strong> filtered destination{results.length !== 1 ? "s" : ""}:</div>
                  <div className="df-results">
                    {paginated.map((dest, i) => {
                      const inWishlist = wishlistIds.has(dest.name + "|" + dest.country);
                      return (
                        <div className="df-result-item" key={dest.id} style={{ animationDelay: `${i * 0.06}s` }}>
                          {dest.img
                            ? <div className="df-result-img" style={{ backgroundImage: `url(${dest.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                            : <div className="df-result-img-placeholder"><ImageIcon /></div>
                          }
                          <div className="df-result-info">
                            <div className="df-result-name">{dest.name}</div>
                            <div className="df-result-country">{dest.country}</div>
                            <div className="df-result-cost">${fmt(dest.cost)}</div>
                          </div>
                          <div className="df-result-right">
                            <div className="df-tags">
                              {dest.interests.slice(0, 2).map(tag => <span key={tag} className="df-tag">{tag}</span>)}
                              {dest.interests.length > 2 && (
                                <div className="df-tag-popover-wrap">
                                  <span className="df-tag df-tag-more" onClick={e => { e.stopPropagation(); setOpenTagsId(openTagsId === dest.id ? null : dest.id); }}>
                                    +{dest.interests.length - 2}
                                  </span>
                                  {openTagsId === dest.id && <TagPopover tags={dest.interests} onClose={() => setOpenTagsId(null)} />}
                                </div>
                              )}
                            </div>
                            <button className={`df-heart${inWishlist ? " saved" : ""}`} onClick={() => toggleWishlist(dest)} title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}>
                              <HeartIcon filled={inWishlist} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* pagination controls */}
                  {totalPages > 1 && (
                    <div className="df-pagination">
                      <button className="df-page-btn df-page-nav" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Previous</button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <button key={p} className={`df-page-btn${page === p ? " active" : ""}`} onClick={() => setPage(p)}>{p}</button>
                      ))}
                      <button className="df-page-btn df-page-nav" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next →</button>
                    </div>
                  )}
                </>
              )}
            </div>
    </div>
  );
}
