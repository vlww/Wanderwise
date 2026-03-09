import { useState } from "react";
import { GlobeIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, AlertIcon } from "../components/Icons";
import "../styles/login.css";

export default function LoginPage({ onLogin }) {
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




        </div>
        </div>
    )
}