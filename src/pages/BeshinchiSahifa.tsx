import React, { useRef, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../pages/index.css";
import { useNavigate } from "react-router-dom";

const BeshinchiSahifa: React.FC = () => {
  const navigate = useNavigate();
  const smsRef = useRef<HTMLInputElement>(null);
  const authenticatorAppRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>("");

  const validateInputs = (): boolean => {
    if (!smsRef.current?.value.trim()) {
      setError("SMS option bo'sh bo'lmasligi kerak!");
      return false;
    } else if (!authenticatorAppRef.current?.value.trim()) {
      setError("Authenticator app option bo'sh bo'lmasligi kerak!");
      return false;
    }
    setError("");
    return true;
  };

  const handleContinue = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
      const formData = {
        sms: smsRef.current.value,
        authenticatorApp: authenticatorAppRef.current.value,
      };

      localStorage.setItem("formDataFivepage", JSON.stringify(formData));
      navigate("/footerpage");
    }
  };

  return (
    <div className="beshinchi-sahifa">
      <Header />
      <div className="main-content">
        <div className="main-chart">
          <Main />
        </div>

        <div className="form-container">
          <div className="form-wrapper">
            <form onSubmit={handleContinue}>
              <div className="form-field">
                <label>Keep your account secure</label> <br />
                <input
                  ref={smsRef}
                  type="text"
                  placeholder="SMS Option"
                  className="input-field"
                />{" "}
                <br />
                <input
                  ref={authenticatorAppRef}
                  type="text"
                  placeholder="Authenticator App Option"
                  className="input-field"
                />{" "}
                <br />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="submit-button">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeshinchiSahifa;
