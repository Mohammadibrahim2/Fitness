import React from 'react'
import img from'../../images/self.jpeg';
import './calculate.css';
import{useState,useEffect}from'react';


const Calculate=(props)=>{

const [breaktime,setBreakTime]=useState([])
const {calculate,toastComming}=props


useEffect(()=>{
const storedTime=getStoredTime()
const savedTime=[]
for(const time in storedTime){
    const addedTime=props.allCard.find(card=>card.time==breaktime) 
       if(addedTime){
        // const quantity=storedTime[time];
        // addedTime.quantity=quantity
        savedTime.push(addedTime)
    
       }
       setBreakTime(savedTime)
}
},[]);


 //getting stored data
 const getStoredTime=()=>{
 let breakTimeCart={}
//get the break Time cart
const storeTime=localStorage.getItem('breakTimeCart')
if(storeTime){
breakTimeCart=JSON.parse(storeTime)
}
return breakTimeCart
 };











let totalTime=0
for(const time of calculate){
	totalTime=totalTime+time.time
}



const handleChangeTime=(breaktime)=>{

setBreakTime(breaktime)
addBreaktime(breaktime)

}
const addBreaktime=(breaktime)=>{
	let breakTimeCart={}
//get the Time cart
const storeTime=localStorage.getItem('breakTimeCart')
if(storeTime){
breakTimeCart=JSON.parse(storeTime)
}
//add quantity
 const quantity=breakTimeCart[breaktime]
    if(quantity){
        const newQuantity=parseInt(quantity)+1;
        breakTimeCart[breaktime]=newQuantity;
    }
    else{
        breakTimeCart[breaktime]=1  
    }
    localStorage.setItem('breakTimeCart',JSON.stringify(breakTimeCart))
};
const toast=()=>{
    window.alert(successfully done!)
}

return(
<div className="personal-info">
<div className="self-info">
<img src={img}alt="ami ace"/>
<div className="adress">
<p>Mohammad Ibrahim</p>
<p>Noakhali,Bangladesh</p>
</div>
</div>


<div className="physical-info">
<div>
<h2>85 kg</h2>
<p>Weight</p></div>

<div>
<h2>75 kg</h2>
<p>Weight</p></div>

<div>
<h2> 70 kg</h2>
<p>Weight</p></div>


</div>
<div className="new1">
<h3>Add A Break</h3>
</div>

<div className="time">
<button onClick={()=>handleChangeTime(20)}>20 s</button>
<button onClick={()=>handleChangeTime(30)}>30 s</button>
<button onClick={()=>handleChangeTime(40)}>40 s</button>
<button onClick={()=>handleChangeTime(50)}>50 s</button>

</div>

<h2>Exercise Details</h2>
<div className="total-exercise-time">
<h2>Exercise time</h2>
<p>{totalTime} Seconds</p>
</div>

<div className="total-break-time">
<h2>Break time</h2>
<p>{breaktime} Seconds</p>
</div>


<button onClick={toast} className="finish-btn">Activity completed</button>
</div>


)
}
export default Calculate;