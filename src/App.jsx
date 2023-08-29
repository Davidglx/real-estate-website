import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getstarted/GetStarted";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="App">

      <div  id="header" >
        <div className="white-gradient"/>
        <Header/>
        <div  id="hero">
        <Hero  />
        </div>
      </div>
      <div id="companies">
      <Companies   />
      </div>
     <div id="residencies" >
     <Residencies  />
     </div>
     <div  id="values" >
     <Values />
     </div>
     <div id="contact">
     <Contact   />
     </div>
     <div id="getStarted">
     <GetStarted   />
     </div>
     <div  id="footer">
     <Footer  />
     </div>
     
    
  



  
    </div>
  );
};
export default App;