import { useState } from 'react';
import '../styles/budget-tracker.css';
import { ImageIcon } from '../components/Icons';
import { BT_PER_PAGE } from '../data/initialData';

export default function BudgetTrackerPage({ wishlist, savings, setSavings, goal, setGoal }) {


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
