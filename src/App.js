
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import{
   // BrowserRouter as Router,
  //  Switch,
  //  Route
 // }from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },2000)
  }

 const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#3B185F';
    showAlert("Dark mode has been enabled","success");
    document.title='TextZilla-Dark Mode';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextZilla-Light Mode';
  }
  }
  
    return (
    <>
    {/*<Router>*/}
    <Navbar title="TextZilla" mode={mode} toggleMode={toggleMode} aboutText ="About" />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Switch>*/}
          {/*<Route exact path="/about">
            <About/>
          </Route>*/}
          {/*<Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
          {/*</Route>
        </Switch>*/}
     
    {/*<About/>*/}
    </div>
   {/* </Router>*/}
    
    </>
  );
}

export default App;
