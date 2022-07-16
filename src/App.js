import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About.js';
import Alert from './components/Alert';
import { useState } from 'react';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const[mode,setMode]= useState('light');//checking dark Mode is enabled or Not
  const[alert,setAlert]= useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#001e3c";
      document.body.style.color="white";
      showAlert("Dark Mode has been Enabled","success");
      document.title = "TextUtils - dark Mode";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode has been Enabled","success");
      document.title ="TextUtils - Light Mode";
    }
  }
  return (
<>
{/* <BrowserRouter> */}
<Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
 {/*exact is used to get exact path and not partial matching of path
 eg:
 /users ---> Component 1
 /users/home --->Component 2
 */}
    {/* <Routes>
    <Route exact path="/" element={ */}
    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
    {/* </Route> */}
    {/* <Route exact path="/About" element={<About/>}>
    </Route>
    </Routes> */}
</div>
  {/* </BrowserRouter> */}

</>
  );
}

export default App;
