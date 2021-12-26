import './App.css';
import mergeImages from 'merge-images';
import React, { useState, useEffect, useRef } from "react";
import backGround from './alpaca/backgrounds/blue50.png';
import accessories from './alpaca/accessories/flower.png';
import ears from './alpaca/ears/default.png';
import hair from './alpaca/hair/default.png';
import leg from './alpaca/leg/default.png';
import mouth from './alpaca/mouth/default.png';
import neck from './alpaca/neck/default.png';
import nose from './alpaca/nose.png';


const Alpaca = () => {
    const [background, setBack] = useState(null);
    const canvas = useRef(null);

    // mergeImages(['./alpaca/backgrounds/blue50.png', './alpaca/accessories/flower.png']).then(b64 => document.querySelector('img').src = b64);
   
    
    // Set up elements in canvas
    useEffect(() => {
       const backgroundImage = new Image();
       backgroundImage.src = "./alpaca/backgrounds/blue50.png";
       backgroundImage.onload = () => setBack(backgroundImage);
    }, []);

    // Draw elements in canvas ussing hook
    useEffect(() => {
        if (background && canvas) {
            const ctx = canvas.current.getContext("2d");
            ctx.drawImage(background, 0, 0);
            console.log("rect filled");
        } 
    }, [background, canvas]);

    // useEffect(() => {
    //     if (canvas) {
    //         const ctx = canvas.current.getContext('2d');
    //         ctx.drawImage(backGround, 0, 0);
    //         console.log("test imported component");
    //     }
    // }, []);

    // Render image to screen
    return ( 
        <div className = "App">
            <h1> Alpaca app </h1>
            <br/>
            <>
                <canvas ref={canvas} width={400} height={400}/>
            </>           
        </div>
        );
}

export default Alpaca;


// class Alpaca extends Component {
//     state = {
//         background: {background},
//         accessories: {accessories},
//         ears: {ears},
//         hair: {hair},
//         leg : {leg},
//         mouth : {mouth},
//         neck : {neck},
//         nose : {nose}
//     };
  

//     render() {
//         return ( 
//         <div className = "App">
//             <h1> Alpaca app </h1>
//             <br/>

//             <>
//                 <img src={background} alt="background"/>
//                 <img src={accessories} alt="accessories"/>
//             </>
            
//         </div>
//         );
//     }
// }
