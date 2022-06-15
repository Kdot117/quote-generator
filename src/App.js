import './App.css';
import { useState } from 'react';

const quotes = [
  {
      quote:  'Luck is what happens when preparation meets opportunity.',
      source: 'Seneca',
      },
      {
      quote:  "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times, I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      source: 'Michael Jordan',
      },
      {
      quote:  'Our life is what our thoughts make it.',
      source: 'Marus Aurelius',
      },
      {
      quote: "You only have to do a very few things right in your life so long as you don't do too many things wrong.",
      source: 'Warren Buffet',
      },
      {
      quote: 'Defeat is not the worst of failures. Not to have tried is the true failure.',
      source: 'George E. WoodBerry',
      },
      {
        quote:  'The best answer to anger is silence',
        source: 'Marus Aurelius',
      },
      {
        quote:  'Wishful thinking is othe thing, and reality is another.',
        source: 'Jalal Talabani',
      }
  ];


function App(props) {
  const [index, setIndex] =useState();
  

 const generate = () => {
   const index = Math.floor(Math.random() * quotes.length);
   
   
   setIndex(index);

 };


  return (
    <div className="App-container">

      <div className="quote-box">
        
        <p className='quote'> <i class="fa-solid fa-quote-left"/> {quotes[index] && quotes[index].quote} <i class="fa-solid fa-quote-right" /></p>
        <p className='quote-author'> {quotes[index] && quotes[index].source} </p>
         
    
        <button onClick={generate}>New quote</button>

      </div>

      




    </div>

      
    
  );
  
  }
export default App;
