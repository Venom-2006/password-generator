import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includenumbers, setIncludeNumbers] = useState(false);
  const [includesymbols, setIncludeSymbols] = useState(false); 

 function copyToClipboard() { 
    navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");

 }
 function generatePassword() {
   const chr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const num="0123456789";
   const sym="!@#$%^&*()_+";
   let pass = "";
   let characters = chr;
    if(includenumbers) characters += num;
    if(includesymbols) characters += sym;
    for(let i = 0; i < length; i++) {
      let idx =Math.floor(Math.random()*characters.length);
      pass+=characters[idx];
    }
    setPassword(pass);
 }

  return (
    <>
     <div className="mainclass">
      <div className="heading">
        <h1>Choose safe , Stay secure !</h1>
      </div>
       <div className="box">
          <div className="display">
            <input type="text" value={password}  readOnly />
            <button className="copybtn" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
          <div className= "controls">
            <div className="length">
              <label htmlFor="length">Length: {length}</label>
              <input type="range" id="length" min="8" max="30" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
              
            </div>
            <div className="checkboxes">
              <div className="ch1">
                <input type="checkbox" id="numbers" checked={includenumbers} onChange={()=>setIncludeNumbers(prev=>!prev)}/>
                <label htmlFor="numbers" style={{fontWeight:'bold'}}>Include Numbers</label>
              </div>
              <div className="ch2">
                <input type="checkbox" id="symbols" checked={includesymbols} onChange={()=>setIncludeSymbols(prev=>!prev)}/>
                <label htmlFor="symbols" style={{fontWeight:'bold'}}>Include Symbols</label>
              </div>
            </div>
            <button className="generatebtn" onClick={generatePassword} style={{color:'black',fontWeight:'bold'}}>
              Generate Password
            </button>
          </div>
       </div>
     </div>
    </>
  )
}

export default App
