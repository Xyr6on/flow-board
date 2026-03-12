import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from "react-router-dom";
import './Login.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setSignup] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">
          <div className="content">

            <h1 className="logo">Flow Board</h1>

            <div className="illustration">
              <img
                src="/login.avif"
                alt="Trello Illustration"
              />
            </div>

            <p className="subtitle">
              Move teamwork forward — <br />
              even on the go
            </p>

            <div className="buttons">
              <button className="signup">Sign up</button>
              <button className="login">Log in</button>
            </div>

            <p className="terms">
              By signing up, you agree to our{" "}
              <a href="#">Terms of service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>

            <a className="support" href="#">
              Contact support
            </a>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
