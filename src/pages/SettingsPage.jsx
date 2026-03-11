import { useState } from 'react';
import '../styles/settings.css';
import { EyeIcon, EyeOffIcon } from '../components/Icons';
import { DEMO_EMAIL } from '../data/initialData';

export default function SettingsPage({ onLogout, colorTheme, setColorTheme, emailNotifications, setEmailNotifications }) {
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwError, setPwError] = useState("");
  const [acctSaved, setAcctSaved] = useState(false);
  const [prefSaved, setPrefSaved] = useState(false);
  const [draftNotif, setDraftNotif] = useState(emailNotifications);

  const saveAccount = () => {
    setPwError("");
    if (password && password.length < 6) { setPwError("Password must be at least 6 characters."); return; }
    if (password && password !== confirmPassword) { setPwError("Passwords do not match."); return; }
    setAcctSaved(true);
    setTimeout(() => setAcctSaved(false), 2500);
    setPassword(""); setConfirmPassword("");
  };

  const savePreferences = () => {
    setEmailNotifications(draftNotif);
    setPrefSaved(true);
    setTimeout(() => setPrefSaved(false), 2500);
  };

  return (
    <div className="page">
      <div className="st-wrap">
        <div className="greeting" style={{ marginBottom: 24 }}>
          <h1 className="greeting-logo">Settings</h1>
          <p>Manage your account and app preferences.</p>
        </div>

        {/* settings */}
        <div className="st-section">
          <div className="st-section-header"><h3>Account Settings</h3></div>
          <div className="st-section-body">
            <div className="st-row">
              <span className="st-label">Email</span>
              <div className="st-input-wrap">
                <input className="st-input" style={{ paddingRight: 14 }} type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="st-divider" />
            <div className="st-row">
              <span className="st-label">New Password</span>
              <div className="st-input-wrap">
                <input className="st-input" type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Leave blank to keep current" />
                <button className="st-input-icon-r" onClick={() => setShowPass(p => !p)}>{showPass ? <EyeOffIcon /> : <EyeIcon />}</button>
              </div>
            </div>
            <div className="st-row">
              <span className="st-label">Confirm</span>
              <div className="st-input-wrap">
                <input className="st-input" type={showConfirm ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Re-enter new password" />
                <button className="st-input-icon-r" onClick={() => setShowConfirm(p => !p)}>{showConfirm ? <EyeOffIcon /> : <EyeIcon />}</button>
                {pwError && <div className="st-error">{pwError}</div>}
              </div>
            </div>
            <div className="st-save-row">
              {acctSaved && (
                <span className="st-saved-msg">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Saved!
                </span>
              )}
              <button className="st-save-btn" onClick={saveAccount}>Save Changes</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
