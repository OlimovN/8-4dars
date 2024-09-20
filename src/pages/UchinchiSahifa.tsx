import React, { useRef, useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../pages/threepage.css"; // Uchinchchi sahifa uchun alohida CSS
import { useNavigate } from "react-router-dom";

const UchinchiSahifa = () => {
  const navigate = useNavigate();
  const vatRef = useRef<HTMLInputElement>(null);
  const industryRef = useRef<HTMLSelectElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  const validateInputs = (): boolean => {
    if (!vatRef.current?.value.trim()) {
      setError("VAT raqami kiritilishi kerak!");
      return false;
    } else if (
      !industryRef.current?.value.trim() ||
      industryRef.current?.value === "Please select your industry"
    ) {
      setError("Sohani tanlash kerak!");
      return false;
    } else if (
      !websiteRef.current?.value.trim() ||
      !websiteRef.current?.value.includes("www.")
    ) {
      setError("To'g'ri web-sayt kiriting!");
      return false;
    }
    setError("");
    return true;
  };

  const handleNavigate = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateInputs()) {
      const formData = {
        vat: vatRef.current?.value,
        industry: industryRef.current?.value,
        website: websiteRef.current?.value,
      };
      localStorage.setItem("formDataThreepage", JSON.stringify(formData));
      navigate("/forpage");
    }
  };

  return (
    <div>
      <div className="threepage-header">
        <Header />
      </div>
      <div className="threepage-content container">
        <div className="threepage-left">
          <Main />
        </div>
        <div className="threepage-form-wrapper">
          <form className="threepage-form" onSubmit={handleNavigate}>
            <label className="threepage-label">VAT Number</label> <br />
            <input ref={vatRef} type="text" placeholder="VAT Number" /> <br />
            <label className="threepage-label">Industry</label> <br />
            <select ref={industryRef}>
              <option>Please select your industry</option>
              <option>Industry1</option>
              <option>Industry2</option>
            </select>{" "}
            <br />
            <label className="threepage-label">Website</label> <br />
            <input ref={websiteRef} type="text" placeholder="Website" /> <br />
            {error && <p className="threepage-error">{error}</p>}
            <button type="submit" className="threepage-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UchinchiSahifa;
