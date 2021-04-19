import {Component} from 'react';
import {useState} from 'react';
import './App.css';
import React from "react";



const reuseComponet = 
  <div className="comptext">
    <br></br>
    <h2>Pet</h2>
    <p>Name: </p>
    <p>Breed: </p>
    <p>Owner: </p>
    <p>Fun facts: </p>
      <br></br>
    

  </div>;

function App() {
    return <div>
      <br></br>
      <div className="compsection">
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
      <div className="compbox">{reuseComponet}</div>
    </div> 
    </div> 
}

  






export default App;

