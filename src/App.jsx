import { useState } from "react";

/* navigation bar (on everything except login screen) */
import NavBar             from "./components/NavBar";

/* all 6 pages from wireframes */
import LoginPage          from "./pages/LoginPage";
import HomePage           from "./pages/HomePage";
import DestinationFinder  from "./pages/DestinationFinder";
import WishlistPage       from "./pages/WishlistPage";
import BudgetTracker      from "./pages/BudgetTracker";
import SettingsPage       from "./pages/SettingsPage";

/* access wishlist dataset */
import { THEMES, INITIAL_WISHLIST } from "./data/initialData";
import "./styles/global.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab,      setTab]      = useState("Home");
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);
  const [savings,  setSavings]  = useState(1200);
  const [goal, setGoal] = useState(1800);
  const [meta, setMeta] = useState(() =>
    Object.fromEntries(INITIAL_WISHLIST.map(w => [w.id, { note: "", label: "Favorite" }]))
  );
  const [colorTheme, setColorTheme] = useState("Blue");
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleLogout = () => { setLoggedIn(false); setTab("Home"); };
  const themeVars = THEMES[colorTheme] || THEMES.Blue;

  const renderPage = () => {
    switch (tab) {
      case "Home":               return <HomePage wishlist={wishlist} setWishlist={setWishlist} savings={savings} setSavings={setSavings} goal={goal} />;
      case "Destination Finder": return <DestinationFinder wishlist={wishlist} setWishlist={setWishlist} />;
      case "Wishlist":           return <WishlistPage wishlist={wishlist} setWishlist={setWishlist} meta={meta} setMeta={setMeta} />;
      case "Budget Tracker":     return <BudgetTrackerPage wishlist={wishlist} savings={savings} setSavings={setSavings} goal={goal} setGoal={setGoal} />;
      case "Settings":           return <SettingsPage onLogout={handleLogout} colorTheme={colorTheme} setColorTheme={setColorTheme} emailNotifications={emailNotifications} setEmailNotifications={setEmailNotifications} />;
      default: return null;
    }
  };

  return (
    <>
      <div className="app-bg" />
      <div className="app-dots" />

      {!loggedIn ? (
        <LoginPage onLogin={() => setLoggedIn(true)} />
      ) : (
        <>
          <NavBar active={tab} setActive={setTab} />
          {renderPage()}
        </>
      )}
    </>
  );
}
