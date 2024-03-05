import React, {useState} from 'react'

export default function Textform(props) {
  const handleclick =()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.applyalert("converted to uppercase","succes")
  }
  const handleonchange =(event)=>{
    console.log("onchange");
    setText(event.target.value);

  }
  // const handlecolorclick =()=>{
  //   let newcolor=color;
  //   settextcolor(newcolor);
    
  // }

  const[text,setText]= useState("enter text");
  // const[color,setcolor]=useState("enter color");
  // const[textcolor,settextcolor]=useState("black");
  // setText("ruchita");// correct way but gives error   
  return (
    <>
    <div className='container' style={{color:props.mode==="light"?"black":"white"}}>
        <h2>{props.heading} </h2>
<div className="mb-3">
<label htmlFor="mybox" className="form-label"></label>
<textarea className="form-control"  value={text} id="mybox"  onChange={handleonchange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} rows="8"></textarea> 
{/* text area gives default value by text */}
</div> 

<button className='btn btn-primary mx-1' onClick={handleclick} >Convert to uppercase</button>
<br />
{/* <div>
<textarea className="form-control"  value={color} id="my" onChange={(e) => setcolor(e.target.value)} rows="1"></textarea> 
{/* <button className='btn btn-primary mx-1' onClick={handlecolorclick}>Change color</button> */}
{/* </div> */}

</div>
<div className="container" style={{color:props.mode==="light"?"black":"white"}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p> {.008*text.split(" ").length} minutes to read it</p>
</div>
</>
  )
}
