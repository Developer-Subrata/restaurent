import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  const options = [
    // "Recipes & Menus",
    // "Share Your Recipe",
    // "Custom Meal Plan",
    // "Create Grocery Store",
    // "Cooking Tips & Tricks",
  ];
  return (
    <>
      <article className="recipes">
      <h3><marquee direction="right">Available Now</marquee></h3>
        <section>
          {options.map((element) => {
            return <button key={element}>{element}</button>;
          })}
        </section>
        <section className="container">
          {recipes.slice(0, 8).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>
        <h3>Trending Foods..............</h3>
        <section className="container">
          {recipes.slice(8).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>
      </article>
    </>
  );
};

export default Recipes;

const Card = ({ element }) => {
  return (
    <Link to={`/recipe/${element.id}`} className="card">
      <img src={element.image} alt={element.title} />
      <h4>{element.title}</h4>
      <h4>{element.PRICE}</h4>
      <h4>{element.cookingTime}</h4>
    </Link>
  );
};
