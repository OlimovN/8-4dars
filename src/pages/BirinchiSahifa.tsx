import React, { useRef, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../pages/index.css";
import { useNavigate } from "react-router-dom";

const BirinchiSahifa: React.FC = () => {
  const navigate = useNavigate();
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>("");

  const validateInputs = (): boolean => {
    if (!addressRef.current?.value.trim()) {
      setError("Address bosh bo'lmasligi kerak!");
      return false;
    } else if (!cityRef.current?.value.trim()) {
      setError("City bosh bo'lmasligi kerak!");
      return false;
    } else if (!zipRef.current?.value.trim()) {
      setError("Zip bosh bo'lmasligi kerak!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (validateInputs()) {
      const formData = {
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        zip: zipRef.current?.value,
      };

      localStorage.setItem("formDataOnepage", JSON.stringify(formData));
      navigate("/twopage");
    }
  };

  return (
    <div className="birinchi-sahifa">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content">
        <div className="main-chart">
          <Main />
        </div>
        <div className="form-container">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <label>Business address</label> <br />
              <select className="business-select">
                <option>Registered business address</option>
                <option>business1</option>
                <option>business2</option>
              </select>{" "}
              <br />
              <select className="business-type-select">
                <option>Type of business</option>
                <option>business1</option>
                <option>business2</option>
              </select>{" "}
              <br />
              <label>Address</label> <br />
              <input
                ref={addressRef}
                type="text"
                placeholder="address line 1"
                className="input-field"
              />{" "}
              <br />
              <input
                type="text"
                placeholder="address line 2"
                className="input-field"
              />{" "}
              <br />
              <input
                ref={cityRef}
                type="text"
                placeholder="City"
                className="input-field"
              />{" "}
              <br />
              <input
                ref={zipRef}
                type="text"
                placeholder="Zip"
                className="input-field"
              />{" "}
              <br />
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

export default BirinchiSahifa;
