import { useState } from "react";
import { GlobeIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, AlertIcon } from "../components/Icons";
import { DEMO_EMAIL, DEMO_PASSWORD } from "../data/Data";
import "../styles/login.css";

export default function LoginPage({ onLogin }) {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

    const handle = async () => {
        setError("");
        if (!email || !password) {
          setError("Please enter your email and password.");
          return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
          setError("Please enter a valid email address.");
          return;
        }
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1100));
        setLoading(false);
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          onLogin();
        } else {
          setError("Incorrect email or password.");
        }
      };
    
    return (
        <div className="login-wrap">
          <div className="login-card">
            {/* logo */}
            <div className="login-logo">
              <div className="login-logo-icon">
                <GlobeIcon />
              </div>
              <h1>Wanderwise</h1>
            </div>
        
        {/* error box */}
                {error && (
                <div className="error-box" key={error}>
                    <AlertIcon />
                    {error}
                </div>
                )}

        {/* email box */}
                <div className="field-grp">
                  <label>Email</label>
                  <div className="field-wrap">
                    <div className="field-icon"><MailIcon /></div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handle()}
                      autoComplete="email"
                    />
                  </div>
                </div>
        
        {/* password box */}
                <div className="field-grp">
                  <label>Password</label>
                  <div className="field-wrap">
                    <div className="field-icon"><LockIcon /></div>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="•••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handle()}
                      autoComplete="current-password"
                    />
                    <button className="field-icon-r" onClick={() => setShowPass((p) => !p)}>
                      {showPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>
        
        {/* forgot password */}
        <div className="forgot-row">
          <button className="link-btn">Forgot password?</button>
        </div>

        {/* submit button */}
        <button className="btn-primary" onClick={handle} disabled={loading}>
          {loading && <span className="spinner" />}
          {loading ? "Logging in…" : "Log In"}
        </button>

        <div className="divider-row">or</div>

        <div className="create-row">
          <button className="link-btn coral">Create an account</button>
        </div>


        </div>
        </div>
    )
}