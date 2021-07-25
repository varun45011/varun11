import React from 'react';
import Header from "../include/Header";
import Footer from "../include/Footer";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";

function Home() {
    return (
        <div className="wrapper">
            <Header />
            <Banner />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
