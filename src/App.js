import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  const [ mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [ alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#272959';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = 'React Course - Dark Mode';
      //setInterval(() => {
      //   document.title = 'React Course as Amazing Mode';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install React Course Now!';
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
      document.title = 'React Course - Light Mode';
    }
  }
  
  return(
      <>
     {/* <BrowserRouter> */}
     <Navbar title="React Course" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">   
     {/* <Switch>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
            {/* </Route> */}
          {/* <Route exact path="/about">
             <About/>
             </Route> */}
      {/* </Switch> */}
     </div>
     {/* </BrowserRouter> */}
      </>
    );
}

export default App;
