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

      </div>
    </div>
  );
}
