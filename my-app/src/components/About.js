import React, { useState } from 'react' 
export default function About() {
  const[styleit,setmystyle]=useState({
    color:"white",
    backgroundColor:"black",
    border:"2px solid white"
  })
  const[text,settext]=useState("enable dark mode")
  
  const toggleStyle = ()=>{
    if(styleit.color === "white"){
      setmystyle({
        color:"black",
        backgroundColor:"white"
      })
      settext("enable dark mode");
    }
    else{
      setmystyle({
        color:"white",
        backgroundColor:"black"
      })
      settext("enable light mode");
    }
  }
   
  return (
    <>
    
    <div className='container' style={styleit}>
    <h1 className='my-3'>About Us</h1>
      <div class="accordion"   id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={styleit} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={styleit}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={styleit} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"  style={styleit}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item"  style={styleit}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed"  style={styleit} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className='container my-3'>
<button type='button' onClick={toggleStyle} className='btn btn-primary'>{text}</button>
</div>
</div>
</>
  )
}
