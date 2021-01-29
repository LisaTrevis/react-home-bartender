import React from "react";
import CocktailCard from "./CocktailCard";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <section className="section">
        <h2 className="section-title no-results">
          No cocktails matched your search
        </h2>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Results</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
