import "./App.css";
import mergeImages from "merge-images";
import React, { useState, useEffect, useRef } from "react";


const Alpaca = () => {

  // mergeImages([blue50, flower]).then(b64 => document.querySelector("img").src = b64);
  mergeImages([
    { src: "alpaca/backgrounds/blue50.png" }, 
    { src: "alpaca/neck/default.png" }, 
    { src: "alpaca/nose.png" }, 
    { src: "alpaca/mouth/default.png" }, 
    { src: "alpaca/leg/default.png" },  
    { src: "alpaca/ears/default.png" }, 
    { src: "alpaca/hair/default.png" }, 
    { src: "alpaca/eyes/default.png" }, 
    { src: "alpaca/accessories/flower.png" }
  ]).then(b64 => document.querySelector('img').src = b64);

  return (
    <div className="App">
      <h1> Alpaca app </h1>
      <br />
      <img width={400} height={400} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Alpaca />
    </div>
  );
}

export default App;

