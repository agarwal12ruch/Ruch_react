// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
    const[mode,setmode]=useState("light")//whether dark mode is enabled or not
    const[alert,setalert]=useState(null);

    //const[mode1,setmode1]=useState("light")//whether purple mode is enabled or not

  const applyalert=(message,type)=>{
    setalert({
      mes:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  } 
    const togglemode=()=>{
        if(mode=== "light")
    {setmode("dark")
        document.body.style.backgroundColor="grey";
        applyalert("dark mode has been enabled","sucees");
    }
    else{
        setmode("light")
        document.body.style.backgroundColor="white"
        applyalert("light mode has been enabled","sucees")
    }
    }
  const togglemode1=()=>{
      if(mode=== "light")
  {setmode("purple")
      document.body.style.backgroundColor="#967BB6";
      applyalert("purple mode has been enabled","sucees");
  }
  else{
      setmode("light")
      document.body.style.backgroundColor="white"
      applyalert("light mode has been enabled","sucees")
  }
  }
 return(
  <>

  <Navbar mode={mode} togglemode1={togglemode1} togglemode={togglemode}/>
  <Alert alert={alert} />
  <div className="container">
  <Textform heading="Enter some text" applyalert={applyalert} mode={mode}/>
  {/* <About/> */}
  </div>
 
  </>
 );
}

export default App;
