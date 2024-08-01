import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from "react";

//browser router is a parent of all routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Nonveg from "./components/subcomponents/Nonveg";
import Veg from "./components/subcomponents/Veg";
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import Booking from './components/subcomponents/Booking';
import RecipeDetails from "./components/RecipeDetails";
import fooddata from "./recipes.json";
import './App.css'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(fooddata);
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/Nonveg" element={<Nonveg />} />
        <Route path="/gallery" element={<Gallery recipes={recipes}/>} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes}/>} />
        {/* :id for dynamic routes */}
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;