import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// CSS

import {books} from './components/books';
import Book from './components/Book';

// Setup vars


function BookList(){
  return (

  <section className="booklist"> 
  <div className="app">
  
    </div>
   {books.map((books, index)=>{
    return  <Book key={books.id} {...books}> </Book>;
   })}
     </section>
  );
}




// const Greeting = ()=> {
//   return React.createElement('h1',{},'Hello world')
// }

ReactDOM.render(<BookList />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
