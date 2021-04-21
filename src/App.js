import {Component} from 'react';
import {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";


const reuseComponent = 
  <div className="comptext">
    <br></br>
    <h2>Koda</h2>
   <p>Breed: Belgian Malinois</p>
   <p>Age: 1 year old</p>
   <p>Owner: Victoria G</p>
   <p>Fun facts: Koda is crazy and likes to be helpd like a baby</p>
      <br></br>
  </div>;

const reuseComponent1 = 
<div className="comptext1">
  <br></br>
  <h2>Jack</h2>
   <p>Breed: Husky</p>
   <p>Age: 1 year old</p>
   <p>Owner: Felix</p>
   <p>Fun facts: Jack is a very friendly dog and isn't scared to approach people at all.</p>
   <img className="jackpic" scr="https://i.pinimg.com/originals/52/83/b7/5283b776fc2d976d09792b9798d52332.jpg" alt="."></img>
    <br></br>
</div>;

const reuseComponent2 = 
  <div className="comptext2">
    <br></br>
    <h2>Guardian</h2>
   <p>Breed: German Shepherd</p>
   <p>Age: 3 months old</p>
   <p>Owner: Meagan</p>
   <p>Fun facts: She loves playing with tennis balls outdoors.</p>
      <br></br>
  </div>;

const reuseComponent3 = 
<div className="comptext3">
  <br></br>
  <h2>Mary</h2>
 <p>Breed: Unkown, maybe Jack Russel Terrier</p>
 <p>Age: 6 years old</p>
 <p>Owner: Victoria P</p>
 <p>Fun facts: Mary is friendly and loves to say hi to people. She enjoys laying in the sun. She loves going on walks.</p>
    <br></br>
</div>;

const reuseComponent4 = 
<div className="comptext4">
  <br></br>
  <h2>Daisy</h2>
 <p>Breed: Tibetan Spaniel</p>
 <p>Age: 7 years old</p>
 <p>Owner: Marisa</p>
 <p>Fun facts: Daisy is nice to everyone else, but she hates the mailman.</p>
    <br></br>
</div>;

const reuseComponent5 = 
<div className="comptext5">
  <br></br>
  <h2>Luna</h2>
 <p>Breed: Black Pit Bull</p>
 <p>Age: 11 years old</p>
 <p>Owner: Marisa</p>
 <p>Fun facts: Luna chased a coyote in the neighborhood when we were walking her.</p>
    <br></br>
</div>;

const reuseComponent6 = 
<div className="comptext6">
  <br></br>
  <h2>Waffles</h2>
 <p>Breed: Wheaten Terrier and Poodle mix</p>
 <p>Age: 11 years old</p>
 <p>Owner: Quincy</p>
 <p>Fun facts: She isn't motivated by food and sometimes only eats one meal per day.</p>
    <br></br>
</div>;

const reuseComponent7 = 
<div className="comptext7">
  <br></br>
  <h2>Bowser</h2>
 <p>Breed: Pitbull</p>
 <p>Age: 11 months old</p>
 <p>Owner: Natasha</p>
 <p>Fun facts: Bowser is 4 hours from San Francisco right now where he is training for a doggie show.</p>
    <br></br>
</div>;

const reuseComponent8 = 
<div className="comptext8">
  <br></br>
  <h2>Poch</h2>
 <p>Breed: Red Star Chicken</p>
 <p>Age: 8 years old</p>
 <p>Owner: Natasha</p>
 <p>Fun facts: Poch hates getting picked up. She lays a lot of eggs and has little chicks as well.</p>
    <br></br>
</div>;

const reuseComponent9 = 
<div className="comptext9">
  <br></br>
  <h2>Milo</h2>
 <p>Breed: Golden Retriever</p>
 <p>Age: 1 year and 4 months old</p>
 <p>Owner: Victoria G</p>
 <p>Fun facts: Milo absolutely loves water!</p>
    <br></br>
</div>;

const reuseComponent10 = 
<div className="comptext10">
  <br></br>
  <h2>Coco</h2>
 <p>Breed: Terrier Shih Tzu mix</p>
 <p>Age: 7 years old</p>
 <p>Owner: Bernie</p>
 <p>Fun facts: Coco can get very fiesty. He loves his koala costume. Coco is currently learning how to swim.</p>
    <br></br>
</div>;

function App() {
  
    return <div>
      <div className="heading"><h1>Pet Gallery</h1></div>
      <br></br>
      <div className="compsection">
      <div className="compbox">{reuseComponent}</div>
      <div className="compbox1">{reuseComponent1}</div>
      <div className="compbox2">{reuseComponent2}</div>
      <div className="compbox3">{reuseComponent3}</div>
      <div className="compbox4">{reuseComponent4}</div>
      <div className="compbox5">{reuseComponent5}</div>
      <div className="compbox6">{reuseComponent6}</div>
      <div className="compbox7">{reuseComponent7}</div>
      <div className="compbox8">{reuseComponent8}</div>
      <div className="compbox9">{reuseComponent9}</div>
      <div className="compbox10">{reuseComponent10}</div>
    </div>
    </div> 
}




export default App;













