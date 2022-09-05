// import Accordion from 'react-bootstrap/Accordion';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Results from './Results';
import Home from './Home';
import MultiStorePage from './MultiStorePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {useEffect,useState} from "react"


function App() {


  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({
  id:0,
  email:''
  })
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    fetch("http://localhost:3001/check-token",{
      headers:{
        Authorization:`Bearer ${storedToken}`
      }
    }).then(res=>{
      if(!res.ok){
      console.log("invalid token!")
      localStorage.removeItem("token")
      }
      else {
        console.log("valid token")
        res.json().then(data=>{
          setToken(storedToken)
          setUser({
            id:data.id,
            email:data.email
          })
        })
      }
    })
  },[])

  const submitHandleLogin= e=>{
    e.preventDefault();
    fetch("http://localhost:3001/login",{
        method:"POST",
        body:JSON.stringify({
          email,
          password
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      setUser({
        id:data.user.id,
        email:data.user.email
      })
      setToken(data.token)
      localStorage.setItem("token",data.token)
    })
    }

  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/results/:id" element={<Results/>}/>
      <Route path="/search/:store/:zipCode" element={<MultiStorePage/>}/>
    </Routes>
  </Router>
  );
}

export default App;
