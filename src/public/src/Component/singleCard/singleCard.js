import React from'react'
import'./singleCard.css'
const SingleCard=(props)=>{

	 const {time,tittle,age,image,body}=props.card

return(

<div className="cardSection">

<div className="singleCard">
<img src="{image}"alt="ami ace"></img>
<p> Body {body}</p>
<h3> For age {age}</h3>
<h3>Time required {time}</h3>
<button onClick={()=>props.handleAddToCard(props.card)}className="card-btn"> Add to card</button>
</div>



</div>
)

}
export default SingleCard;