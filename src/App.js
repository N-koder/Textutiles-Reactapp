


import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TestForm from './component/TestForm';
import Alert from './component/Alert';
// import About from './component/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from 'react-router-dom';

function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been unabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been unabled", "success")
    }
  }

  return (
    <>

      
      {/* <Router> */}
      <Navbar title="Textutiles" aboutText="About us" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />

        <div className="container my-3">
        {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TestForm heading="Enter your text below : "  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route> */}
          {/* </Routes> */}
          <TestForm heading="Enter your text below : "  mode={mode} showAlert={showAlert}/>
        </div>
 
      {/* </Router> */}


    </>
  );
}

export default App;
