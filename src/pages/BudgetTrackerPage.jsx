import { useState } from 'react';
import '../styles/budget-tracker.css';
import { ImageIcon } from '../components/Icons';
import { BT_PER_PAGE } from '../data/initialData';

export default function BudgetTrackerPage({ wishlist, savings, setSavings, goal, setGoal }) {
  const [rawSavings, setRawSavings] = useState(String(savings));
  const [goalRaw, setGoalRaw] = useState(String(goal));
  const [page, setPage] = useState(1);
  const fmt = n => Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleSavings = val => {
    setRawSavings(val);
    const n = parseFloat(val.replace(/[^0-9.]/g, ""));
    if (!isNaN(n)) setSavings(n);
  };
  const handleGoal = val => {
    setGoalRaw(val);
    const n = parseFloat(val.replace(/[^0-9.]/g, ""));
    if (!isNaN(n)) setGoal(n);
  };

  const goalPct = Math.min((savings / (goal || 1)) * 100, 100);
  const totalPages = Math.max(1, Math.ceil(wishlist.length / BT_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = wishlist.slice((safePage - 1) * BT_PER_PAGE, safePage * BT_PER_PAGE);

  return (
    <div className="page">
      <div className="bt-wrap">
        <div className="bt-greeting">
          <h1 className="greeting-logo">Budget Tracker</h1>
          <p>Track your savings and see exactly how close you are to each destination.</p>
        </div>

        <div className="bt-inputs-row">
          <div className="bt-input-group">
            <div className="bt-input-label">Total Savings</div>
            <div className="bt-input-field">
              <span className="bt-dollar">$</span>
              <input className="bt-input" value={rawSavings} onChange={e => handleSavings(e.target.value)} placeholder="0.00" />
            </div>
            <div className="bt-input-underline" />
          </div>
          <div className="bt-input-group">
            <div className="bt-input-label">Set Savings Goal</div>
            <div className="bt-input-field">
              <span className="bt-dollar">$</span>
              <input className="bt-input" value={goalRaw} onChange={e => handleGoal(e.target.value)} placeholder="0.00" />
            </div>
            <div className="bt-input-underline" />
            <div className="bt-goal-bar"><div className="bt-goal-fill" style={{ width: `${goalPct}%` }} /></div>
            <div className="bt-goal-pct"><strong>{Math.round(goalPct)}%</strong> of goal saved</div>
          </div>
        </div>

        <div className="bt-table-wrap">
          <div className="bt-table-header">
            <div>Destination</div>
            <div>Total Cost</div>
            <div>Status</div>
          </div>
          {wishlist.length === 0 ? (
            <div className="bt-empty">
              <ImageIcon />
              <p>No destinations in your wishlist yet.<br />Add some via the Destination Finder!</p>
            </div>
          ) : (
            paginated.map((dest, i) => {
              const canAfford = dest.cost <= savings;
              const remaining = dest.cost - savings;
              const pct = Math.min((savings / dest.cost) * 100, 100);
              return (
                <div className="bt-table-row" key={dest.id} style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="bt-dest-cell">
                    {dest.img
                      ? <div className="bt-dest-img" style={{ backgroundImage: `url(${dest.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                      : <div className="bt-dest-img-placeholder"><ImageIcon /></div>
                    }
                    <div>
                      <div className="bt-dest-name">{dest.name}</div>
                      <div className="bt-dest-country">{dest.country}</div>
                    </div>
                  </div>
                  <div className="bt-cost-cell">${fmt(dest.cost)}</div>
                  <div>
                    {canAfford ? (
                      <div className="bt-status-affordable">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        Affordable
                      </div>
                    ) : (
                      <div className="bt-status-remaining">
                        <div className="bt-status-amount">${fmt(remaining)} left</div>
                        <div className="bt-status-sublabel">to reach goal</div>
                        <div className="bt-mini-bar"><div className="bt-mini-fill" style={{ width: `${pct}%` }} /></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {totalPages > 1 && (
          <div className="df-pagination">
            <button className="df-page-btn df-page-nav" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1}>← Previous</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} className={`df-page-btn${safePage === p ? " active" : ""}`} onClick={() => setPage(p)}>{p}</button>
            ))}
            <button className="df-page-btn df-page-nav" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}
