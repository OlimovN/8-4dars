import React, { useRef, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../pages/twopage.css";
import { useNavigate } from "react-router-dom";

const IkkinchiSahifa: React.FC = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>("");

  const validateInputs = (): boolean => {
    if (
      !firstNameRef.current?.value.trim() ||
      !lastNameRef.current?.value.trim()
    ) {
      setError("Ism va Familya kiritilishi shart!");
      return false;
    } else if (
      !emailRef.current?.value.trim() ||
      !emailRef.current?.value.includes("@")
    ) {
      setError("Email noto'g'ri!");
      return false;
    } else if (!addressRef.current?.value.trim()) {
      setError("Manzil kiritilishi kerak!");
      return false;
    } else if (!cityRef.current?.value.trim()) {
      setError("Shahar bo'sh bo'lmasligi kerak!");
      return false;
    } else if (!zipRef.current?.value.trim()) {
      setError("Pochta indeksi kerak!");
      return false;
    } else if (!telRef.current?.value.trim()) {
      setError("Telefon raqam kerak!");
      return false;
    }
    setError("");
    return true;
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
      const formData = {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        zip: zipRef.current?.value,
        tel: telRef.current?.value,
      };
      localStorage.setItem("formDataTwopage", JSON.stringify(formData));
      navigate("/threepage");
    }
  };

  return (
    <div>
      <div className="header-section">
        <Header />
      </div>
      <div className="content-section container">
        <div className="left-column">
          <Main />
        </div>
        <div className="form-container">
          <form className="form" onSubmit={handleFormSubmit}>
            <label className="form-label">Name</label> <br />
            <div className="input-group">
              <input ref={firstNameRef} type="text" placeholder="First Name" />
              <input ref={lastNameRef} type="text" placeholder="Last Name" />
            </div>
            <label className="form-label">Email</label> <br />
            <input ref={emailRef} type="email" placeholder="Email" />
            <label className="form-label">Address</label> <br />
            <input ref={addressRef} type="text" placeholder="Address line 1" />
            <br />
            <input type="text" placeholder="Address line 2" /> <br />
            <input ref={cityRef} type="text" placeholder="City" /> <br />
            <input ref={zipRef} type="text" placeholder="Zip" /> <br />
            <input ref={telRef} type="tel" placeholder="Phone" /> <br />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IkkinchiSahifa;
