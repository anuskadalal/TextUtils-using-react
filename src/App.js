import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
     },1500);
  }
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is enabled","success");
      document.title='TextUtils Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
      document.title='TextUtils Light Mode';
    }
  }
    return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
    <Route  exact path="/about" element={<About />} />
    <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />} />
</Routes>

</div>
</Router>
    </>
  );
}

export default App;
