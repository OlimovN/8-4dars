import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../pages/index.css";

const Footer = () => {
  const handleFinish = () => {
    alert("Siz muvaffaqqiyatli roʻyxatdan oʻtdingiz");
  };

  return (
    <div className="footer-page">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content">
        <div className="main-chart">
          <Main />
        </div>
        <div className="form-container">
          <div className="form-wrapper">
            <h1 className="footer-message">
              Missing required business information
            </h1>
            <br />
            <button onClick={handleFinish} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
