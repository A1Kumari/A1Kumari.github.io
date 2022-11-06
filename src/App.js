import React, {useState, useEffect} from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },1200)
  },[])
  return (
    <div className="App">
      {loading ?(
        <div className="loading-screen">
        <ClipLoader
        color={'#2F4858'}
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>):(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
          
        </>
      )
}
      
    </div>
  );
}

export default App;
