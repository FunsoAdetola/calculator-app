import React, { useEffect, useState } from "react";
import Button from "./Button/Button";
import "./App.css";
import * as math from "mathjs";

const App = () => {
  const [value, setValue] = useState("");

  const handleButtonPress = (val) => {
    setValue(()=> value + val);
  } 
  const handleEqual = ()=> {
    setValue(()=>math.evaluate(value));
  }
  const handleClear= ()=>{
    setValue("");
  }
  const handleBackspace = ()=>{
    setValue(()=>value.slice(0, -1));
  }
       
     

    // if(val === "="){
    //   calculate();
    // }
    // else if( val === "C"){
    //   clear();
    // }
    // else if(val === "CE"){
    //   backspace();
    // }
 

//   const calculate = () => {
//     setValue(eval(value + val));
//   }



//   }
// const backspace= ()=> {
//   
// }



 
  return (
    <div className="parent">
     <div className="App">
      <div className="display">{value}</div>
      <div className="buttons">
      <div className="row">
      <Button onButtonClick={handleClear} name="C">C</Button>
        <Button onButtonClick={handleButtonPress} name="(">(</Button>
        <Button onButtonClick={handleBackspace} name="CE">CE</Button>
        <Button onButtonClick={handleButtonPress} name=")">)</Button>
      </div>
      <div className="row">
      <Button onButtonClick={handleButtonPress}   name="7">7</Button>
        <Button onButtonClick={handleButtonPress} name="8">8</Button>
        <Button onButtonClick={handleButtonPress} name="9">9</Button>
        <Button onButtonClick={handleButtonPress} name="*">X</Button>
      </div>
        <div className="row"> 
        <Button onButtonClick={handleButtonPress} name="4" >4</Button>
        <Button onButtonClick={handleButtonPress} name="5" >5</Button>
        <Button onButtonClick={handleButtonPress} name="6" >6</Button>
        <Button onButtonClick={handleButtonPress} name="-">-</Button>
        </div>
        <div className="row">
        <Button onButtonClick={handleButtonPress} name="1">1</Button>
        <Button onButtonClick={handleButtonPress} name="2">2</Button>
        <Button onButtonClick={handleButtonPress} name="3">3</Button>
        <Button onButtonClick={handleButtonPress} name="+">+</Button>
        </div>
        <div className="row">
        <Button onButtonClick={handleButtonPress} name="0">0</Button>
        <Button onButtonClick={handleButtonPress} name=".">.</Button>
        <Button onButtonClick={handleEqual} name="=">=</Button>
        <Button onButtonClick={handleButtonPress} name="/">÷</Button>
      </div>
      </div>
    </div>
    </div>
  );
    
};

export default App;