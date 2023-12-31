import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
let name = "Apple"

function App() {
const [mode,setMode] = useState('light');

const toggle = ()=>{
if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#25201E'
}
else{
  setMode('light');
  document.body.style.backgroundColor='white'
}
}
  return (
    <>
<NavBar title={"TEXTIFIER"} mode={mode} toggle={toggle}/>
<div className="container">
<TextForm heading="Enter the Text" mode={mode}/>
</div>
{/* <About/> */}
  </>
  );
}

export default App;
