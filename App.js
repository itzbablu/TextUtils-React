import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Bar from './components/Bar';

function App() {
  const [alert,setAlert] =useState(null);
const showalert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
}
const handler= () =>{
    if(mode === "Enable Dark Mode")
  {
    setmode("Disable Dark Mode");
    setstyle({color:"gray",backgroundColor:"black"});
    document.body.style.backgroundColor = "#042743";
    showalert("Dark Mode Has been Enabled","success");
    document.title = "TextUtils - Dark Mode";
  }
  else{
    setmode("Enable Dark Mode");
    setstyle({color:"white",backgroundColor:"blue"});
    document.body.style.backgroundColor = "white";
    showalert("Light Mode Has been Enabled","success");
    document.title = "TextUtils - Light Mode";
  }
}
const [style,setstyle] = useState({color:"white",backgroundColor:"blue"});
const [mode,setmode] = useState("Enable Dark Mode");
  return (
    <>
    <Navbar title = "TextUtils" abouttitle = "About" home = "Home" handler={handler} searchtitle = "Search" mode ={mode} style = {style} />
    <Bar alert={alert}/>
    <div className={` container my-4  text-${style.backgroundColor === "black"?"white":"black"}`}  >
    <TextForm alert={showalert} heading = "Enter your Text to Analyze" CapitalButton = "Convert to UpperCase" Lowercase = "Convert to LowerCase" clear = "Clear Text"/>
    </div>
  </>
  );
}

export default App;
