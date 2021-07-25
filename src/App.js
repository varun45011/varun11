import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import Banner from "./Components/Banner";
import About from "./Components/About";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter> */}
      <Banner />
      <About />
      <Footer />
    </div>
  );
}

export default App;
