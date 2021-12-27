import "./App.css";
import mergeImages from "merge-images";
import React, { useState, useEffect, useRef } from "react";
import blue50 from "./alpaca/backgrounds/blue50.png";
import flower from "./alpaca/accessories/flower.png";
import eyes from "./alpaca/eyes/default.png";
import ears from "./alpaca/ears/default.png";
import hair from "./alpaca/hair/default.png";
import leg from "./alpaca/leg/default.png";
import mouth from "./alpaca/mouth/default.png";
import neck from "./alpaca/neck/default.png";
import nose from "./alpaca/nose.png";

const Alpaca = () => {

  // mergeImages([blue50, flower]).then(b64 => document.querySelector("img").src = b64);
  mergeImages([
    { src: blue50 }, 
    { src: neck }, 
    { src: nose }, 
    { src: mouth }, 
    { src: leg },  
    { src: ears }, 
    { src: hair }, 
    { src: eyes }, 
    { src: flower }
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

