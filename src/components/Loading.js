import React from "react";
import { FaCocktail } from "react-icons/fa";

const Loading = () => {
  return (
    <section className="section">
      <div className="loader">
        <h2 className="section-title">Fetching drinks!</h2>
        <div className="icon">
          <FaCocktail />
        </div>
      </div>
    </section>
  );
};

export default Loading;
