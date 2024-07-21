import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from "react";

//browser router is a parent of all routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import RecipeDetails from "./components/RecipeDetails";
import fooddata from "./recipes.json";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(fooddata);
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home recipes={recipes}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes}/>} />
        {/* :id for dynamic routes */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;