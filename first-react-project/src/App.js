import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      console.log('from dark'+mode)
      document.body.style.backgroundColor = '#0c4c50'
    }else{
      setMode('light')
      console.log('from light'+mode)
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
   <>
    <Navbar title = "Text Utility" about = "About us" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
        <TextArea heading = "Enter the text to analyze below"mode = {mode}/>
    </div>
    {/* <div className="container">
        <About/>
    </div> */}
    
    
    
   </>
  );
}

export default App;
