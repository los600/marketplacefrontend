
import "./App.css";
import React,{Component} from 'react';
import Appbar from "./components/Appbar";
import Create from './components/Create';
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Create />
      <Product/>
    </div>
  );
}

export default App;

