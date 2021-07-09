import React from 'react'
import { Badge } from '@material-ui/core'
import { Button } from '@material-ui/core';



const Book = (props) => {

 //eventhandler,onClick,onnMouseOver
 const clickHandler = (e)=>{
     console.log(e);
  
alert('Do confirm once again....')
 }
 const complexExample = (author,title)=>{
   console.log(author,title);
 }


  const {img,title, author} = props;
  return (
  <article className="book" onMouseOver={()=>{
    console.log(title);
  }} >
   <img src={img} 
  style={{height:200}} alt=""/>
   <h1 onClick={()=>console.log(title)}>{title}</h1>
  <h4> {author}</h4>
  <Badge color="secondary" badgeContent={0} onClick={clickHandler} >
        <Button variant="contained">Buy it!</Button>
      </Badge>

  <button type="button" onClick={()=>complexExample(author,title)}>Add to the cart</button>
    </article>
  );
};

export default Book
