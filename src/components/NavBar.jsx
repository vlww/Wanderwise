import { HomeIcon, GearIcon } from "./Icons";
import "../styles/navbar.css";

const TABS = ["Destination Finder", "Wishlist", "Budget Tracker"];

export default function NavBar({ active, setActive }) {
  return (
    <nav className="nav">
      <button
              className={`nav-home-btn${active === "Home" ? " active" : ""}`}
              title="Home"
              onClick={() => setActive("Home")}
            >
              <HomeIcon />
            </button>
            <div className="nav-tabs">
              {TABS.map(t => (
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
