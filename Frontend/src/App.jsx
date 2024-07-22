import React from "react";
import { RegisterForm } from "./components/pages/RegisterForm";
import { LoginForm } from "./components/pages/LoginForm";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Dashboard } from "./components/pages/Dashboard";
import { Navbar } from "./components/pages/Navbar";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/pages/Footer";
import { Cards } from "./components/pages/Cards";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

export default function App(props) {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Dashboard" element = {<Dashboard />} />
        <Route path = "/Register" element = {<RegisterForm />} /> 
        <Route path ="/LoginForm" element = {<LoginForm />}/> 
      </Routes>
      </BrowserRouter>
    </>
  );
}
/*
<Navbar />
      <Home />
      <Cards/>
      <RegisterForm />
      <LoginForm />
      <About />
      <Contact />
      <Dashboard />
      <Footer/>*/