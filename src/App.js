// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import About from './components/about';
import { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }

  return (
    <>
    {/* <Navbar/> */}
    <Navbar title="myNavbar" about = "Myabout" mode = {mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading="Enter the text to Analyze"/>
    </div>

    {/* <About/> */}
    
    
    </>
    
  );
}

export default App;
