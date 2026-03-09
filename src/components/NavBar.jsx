import { GlobeIcon, GearIcon } from "./Icons";
import "../styles/navbar.css";

const TABS = ["Home", "Destination Finder", "Wishlist", "Budget Tracker", "Settings"];

export default function NavBar({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="nav-logo-icon">
          <GlobeIcon />
        </div>
        Wanderwise
      </div>

      <div className="nav-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`nav-tab${active === t ? " active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <button
        className="nav-settings"
        title="Settings"
        onClick={() => setActive("Settings")}
      >
        <GearIcon />
      </button>
    </nav>
  );
}
