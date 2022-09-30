import React from'react'
import'./singleCard.css'
const SingleCard=(props)=>{

 const {time,tittle,age,image,body}=props.card

return(

<div className="cardSection">

<div className="singleCard">
<div className="activities-info">
<img src={image}alt="ami ace"></img>
<div className='info'>
<p> {body}</p>
<p> For age: {age}</p>
<p>Time required: {time} s</p>
</div>
</div>
<button onClick={()=>props.handleAddToCard(props.card)}className="card-btn"> Add to card</button>

</div>



</div>
)

}
export default SingleCard;