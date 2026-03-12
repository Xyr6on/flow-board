import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setSignup] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="page">
          <div className="logoBox">
            <svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="67" height="64" rx="8" fill="url(#paint0_linear_17_2)" />
              <path d="M53.0006 36.4999H45.5006C42.7406 36.4999 40.5006 34.2599 40.5006 31.4999C40.5006 28.7399 42.7406 26.4999 45.5006 26.4999H53.0006" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 14H43C48.52 14 53 18.48 53 24V39C53 44.52 48.52 49 43 49H23C17.48 49 13 44.52 13 39V24C13 18.48 17.48 14 23 14Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_17_2" x1="33.5" y1="0" x2="33.5" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0919466" stopColor="#FF0099" />
                  <stop offset="0.640787" stopColor="#A200FF" />
                </linearGradient>
              </defs>
            </svg>

            <h1>Cash Ledger</h1>
            {isSignup ? <p>Create your account to get started</p> : <p>Welcome back! Please login to continue</p>}

          </div>

          <div className="card">
            {isSignup ? <h2>Sign up</h2> : <h2>Log In</h2>}

            {isSignup && (
              <>
                <label>Full Name</label>
                <div className="inputBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </>
            )}

            <label>Email Address</label>
            <div className="inputBox">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input type="email" placeholder="Enter your email" />
            </div>

            <label>Password</label>
            <div className="inputBox">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>

            <button className="loginBtn">Log In</button>

            <p className="signup" onClick={() => setSignup(!isSignup)}>
              Don't have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;