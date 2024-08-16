import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import Loader from "./components/Loader/Loader"; // Adjust the path if needed
import Footer from "./components/Footer/Footer";
import Homepagemain from "./components/Homepagemain/Homepagemain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav_small from "./components/navbar/Nav_small";
import About_me from "./components/About/About_me";
import Service from "./components/Services_page/Service";
import Project from "./components/Projects/Project";
import Experience from "./components/Experience/Experience";
import Contact_me from "./components/Contact_me/Contact_me";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Nav_small />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepagemain />}></Route>
              <Route path="/About" element={<About_me />}></Route>
              <Route path="/Service" element={<Service />}></Route>
              <Route path="/Project" element={<Project />}></Route>
              <Route path="/Experience" element={<Experience />}></Route>
              <Route path="/Contact" element={<Contact_me />}></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
