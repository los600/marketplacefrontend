import "./App.css";
import React,{Component} from 'react';
import Appbar from "./components/Appbar";
import CardS from "./components/CardS";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Product/>
    </div>
  );
}

export default App;

