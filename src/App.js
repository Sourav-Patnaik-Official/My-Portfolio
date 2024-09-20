import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Homepagemain from "./components/Homepagemain/Homepagemain";
import About_me from "./components/About/About_me";
import Service from "./components/Services_page/Service";
import Project from "./components/Projects/Project";
import Experience from "./components/Experience/Experience";
import Contact_me from "./components/Contact_me/Contact_me";
import ProjectDetails from "./components/Projects/ProjectDetails";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>{loading ? <Loader /> : <MainContent />}</BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Nav and Footer based on ProjectDetails route */}
      {!location.pathname.startsWith("/projects/") && <Nav />}
      <Routes>
        <Route path="/" element={<Homepagemain />} />
        <Route path="/About" element={<About_me />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact_me />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
