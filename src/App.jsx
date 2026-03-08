import { useState } from "react";
import NavBar             from "./components/NavBar";
import LoginPage          from "./pages/LoginPage";
import HomePage           from "./pages/HomePage";
import DestinationFinder  from "./pages/DestinationFinder";
import WishlistPage       from "./pages/WishlistPage";
import BudgetTracker      from "./pages/BudgetTracker";
import SettingsPage       from "./pages/SettingsPage";
import { INITIAL_WISHLIST, INITIAL_SAVINGS } from "./data/initialData";
import "./styles/global.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab,      setTab]      = useState("Home");
  const [wishlist, setWishlist] = useState(INITIAL_WISHLIST);
  const [savings,  setSavings]  = useState(INITIAL_SAVINGS);

  const renderPage = () => {
    switch (tab) {
      case "Home":
        return (
          <HomePage
            wishlist={wishlist}
            setWishlist={setWishlist}
            savings={savings}
            setSavings={setSavings}
          />
        );
      case "Destination Finder": return <DestinationFinder />;
      case "Wishlist":           return <WishlistPage />;
      case "Budget Tracker":     return <BudgetTracker />;
      case "Settings":           return <SettingsPage />;
      default:                   return null;
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
