import React from 'react';
import SingleCard from'../singleCard/singleCard';
import Calculate from'../calculate/calculate';

import'./cardSection.css'
import {useState,useEffect}from 'react';

const Card=()=>{
const[allCard,setCard]=useState([])
const[calculate,setCalculate]=useState([])


useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setCard(data))
},[]);

useEffect(()=>{
const storedTime=getStoredTime()
const savedTime=[]
for(const time in storedTime){
    const addedTime=allCard.find(card=>card.time==time) 
       if(addedTime){
        const quantity=storedTime[time];
         addedTime.quantity=quantity
        savedTime.push(addedTime)
    
       }
       setCalculate(savedTime)
}
},[]);

const handleAddToCard=(card)=>{

const newcalculate=[...calculate,card]
setCalculate(newcalculate)

addItems(card.time)
 };

const addItems=(Time)=>{
  let timeCart={}
//get the Time cart
const storeTime=localStorage.getItem('timeCart')
if(storeTime){
timeCart=JSON.parse(storeTime)
}
//add quantity
 const quantity=timeCart[Time]
    if(quantity){
        const newQuantity=parseInt(quantity)+1;
        timeCart[Time]=newQuantity;
    }
    else{
         timeCart[Time]=1  
    }
    localStorage.setItem('timeCart',JSON.stringify(timeCart))
};
 //getting stored data
 const getStoredTime=()=>{
 let timeCart={}
//get the Time cart
const storeTime=localStorage.getItem('timeCart')
if(storeTime){
timeCart=JSON.parse(storeTime)
}
return timeCart
 };
 //Toast
 const toastComming=()=>{


}
return(

<div style={{margin:'10px'}}>

<h2>Select today’s exercise</h2>
<div className="container">

<div className="card-container">
{
	allCard.map(card=><SingleCard 
		key={card.id}
		card={card}
		handleAddToCard={handleAddToCard}
		>
		</SingleCard>
		)
}
</div>
<Calculate calculate={calculate}
toastComming={toastComming}
 
 allCard={allCard}

></Calculate>

</div>

<div className="blog">
<h2>.How does React  work?</h2>
<p>React is a declarative, efficient, and flexible JavaScript
 library for building user interfaces. 
  ReactJS is an open-source, component-based front end library 
  responsible only for the view layer of the application.
   It is maintained by Facebook.
React uses a declarative paradigm that makes it easier to reason 
about our application and aims to be both efficient and flexible.
 It designs simple views for each state in our application, and 
 React will efficiently update and render just the right component when 
 your data changes. The declarative view makes our code more
  predictable and easier to debug.</p>
  <p>A React application is made of multiple components,
 each responsible for rendering a small, reusable piece of HTML.
  Components can be nested within other components to 
  allow complex applications to be built out of simple 
  building blocks. A component may also maintain an internal 
  state – for example, a TabList component may store a variable
   corresponding to the currently open tab.</p>

<h2>.What is the difference between props and state?</h2>
<div className='difference'>
<div className="propsSection">
<h2>Props</h2>
<p>The Data is passed from one component to another.</p>
<p>It is Immutable (cannot be modified).</p>
<p>Props can be used with state and functional components</p>
<p>Props are read-only.</p>
</div>
<div className='stateSection'>
<h2>State</h2>
<p>The Data is passed within the component only.</p>
<p>It is Mutable ( can be modified).</p>
<p>State can be used only with the state components </p>
<p>State is both read and write.</p>

</div>
</div>

 <h2>.What is the use of useEffect hook besides Api calling?</h2>

<p>
Fetching data
1.Reading from local storage
2.Registering and deregistering event listeners
React’s effects are a completely different animal 
than the lifecycle methods of classbased components.
The abstraction level differs, too.
.setTimeInterval also woks in useEffect
</p>

</div>
</div>
)

}
export default Card;