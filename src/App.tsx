import React, { useEffect, useState } from "react";
import "../main/index.css";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const [status, setStatus] = useState<{ [key: string]: string | number }>({
    org: 1,
    two: 2,
    thre: 3,
    foor: 4,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const updates = {
      org: localStorage.getItem("formDataOnepage") ? "👍" : 1,
      two: localStorage.getItem("formDataTwopage") ? "👍" : 2,
      thre: localStorage.getItem("formDataFourpage") ? "👍" : 3,
      foor: localStorage.getItem("formDataFivepage") ? "👍" : 4,
    };
    setStatus(updates);
  }, []);

  return (
    <div className="main-container">
      <div className="nav-section">
        <NavButton
          onClick={() => navigate("/")}
          emoji={status.org}
          title="Business Structure"
        />
        <NavButton
          onClick={() => navigate("/ikkinchiSahifa")}
          emoji={status.two}
          title="Bank Details"
        />
        <NavButton
          onClick={() => navigate("/uchinchiSahifa")}
          emoji={status.thre}
          title="2 Step Authentication"
        />
        <NavButton
          onClick={() => navigate("/tortinchiSahifa")}
          emoji={status.foor}
          title="Overview"
        />
      </div>
    </div>
  );
};

interface NavButtonProps {
  onClick: () => void;
  emoji: string | number;
  title: string;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, emoji, title }) => (
  <div className="nav-button">
    <button onClick={onClick} className="emoji-button">
      {emoji}
    </button>
    <h1 className="button-title">{title}</h1>
  </div>
);

export default Main;
