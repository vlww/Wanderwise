import { useState } from "react";
import { WalletIcon, ListIcon, HeartIcon, ImageIcon } from "../components/Icons";
import "../styles/home.css";

export default function HomePage({ wishlist, setWishlist, savings, setSavings, goal }) {
  let pct = (savings / goal) * 100;
  if (pct > 100) {
    pct = 100;
  }
  if (goal == 0) {
    pct = 0;
  }

  let affordable = 0;
  let notAffordable = 0;
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].cost <= savings) {
      affordable = affordable + 1;
    } else {
      notAffordable = notAffordable + 1;
    }
  }

  const handleSavings = val => {
    const n = parseFloat(val.replace(/[^0-9.]/g, ""));
    if (!isNaN(n)) setSavings(n);
  };

  const toggleFav = id => setWishlist(ws => ws.filter(w => w.id !== id));
  const fmt = n => Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="page">
      <div className="greeting">
        <h1 className="greeting-logo">Wanderwise</h1>
      </div>
      <div className="home-grid">
        {/* budget summary */}
        <div className="card">
          <div className="card-header"><WalletIcon /><h2>Budget Summary</h2></div>
          <div className="card-body">
            <div className="savings-input-row">
              <span className="savings-input-label">My Savings</span>
              <input
                className="savings-input"
                defaultValue={savings}
                onChange={e => handleSavings(e.target.value)}
                placeholder="e.g. 1200"
              />
            </div>
            <div className="budget-total">Total Savings: <span>${fmt(savings)}</span></div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-label">${Number(savings).toLocaleString()} of ${goal.toLocaleString()} goal saved</div>
            <div className="budget-divider" />
            <div className="afford-grid">
              <div className="afford-col">
                <div className="afford-label">Affordable<br />Destinations</div>
                <div className="afford-num yes">{affordable}</div>
              </div>
              <div className="afford-col">
                <div className="afford-label">Not Yet<br />Affordable</div>
                <div className="afford-num no">{notAffordable}</div>
              </div>
            </div>
          </div>
        </div>

        {/* wishlist preview */}
        <div className="card">
          <div className="card-header"><ListIcon /><h2>Wishlist</h2></div>
          <div className="card-body" style={{ padding: "8px 14px" }}>
            {wishlist.length == 0 ? (
              <div className="empty-state">
                <ImageIcon />
                No destinations saved yet.<br />Use the Destination Finder to add some!
              </div>
            ) : (
              <div className="wishlist-list">
                {wishlist.map(w => {
                  const canAfford = w.cost <= savings;
                  return (
                    <div className="wish-item" key={w.id}>
                      {w.img
                        ? <div className="wish-img" style={{ backgroundImage: `url(${w.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                        : <div className="wish-img-placeholder"><ImageIcon /></div>
                      }
                      <div className="wish-info">
                        <div className="wish-name">
                          {w.name}
                          <span className={`wish-badge ${canAfford ? "badge-yes" : "badge-no"}`}>
                            {canAfford ? "✓ Affordable" : "Not yet"}
                          </span>
                        </div>
                        <div className="wish-country">{w.country}</div>
                        <div className={`wish-cost${canAfford ? " affordable" : ""}`}>${fmt(w.cost)}</div>
                      </div>
                      <button className="wish-heart" onClick={() => toggleFav(w.id)} title={w.fav ? "Unfavorite" : "Favorite"}>
                        <HeartIcon filled={true} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
