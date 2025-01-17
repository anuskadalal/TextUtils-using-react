import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react,{useState} from 'react';
import Alert from './components/Alert';
//import About from './components/About';
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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
    }
  }
    return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">

    <TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={Mode}/>
    </div>
    </>
  );
}

export default App;
