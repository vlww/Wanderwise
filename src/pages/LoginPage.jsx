import { useState } from "react";
import { GlobeIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, AlertIcon } from "../components/Icons";
import "../styles/login.css";

export default function LoginPage({ onLogin }) {
    return (
        <div className="login-wrap">
          <div className="login-card">
            {/* Logo */}
            <div className="login-logo">
              <div className="login-logo-icon">
                <GlobeIcon />
              </div>
              <h1>Wanderwise</h1>
            </div>
        </div>
        </div>
    )
}