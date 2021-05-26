import React from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";
import "./App.scss";
import Header from "./components/Header";
import Intro from './components/Intro';
import FormFill from './components/FormFill';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header />
    <Intro />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Cart />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Product />
          </div>
        </div>
      </div>
      <FormFill />
      <Footer />
    </>
  );
}
export default App;
