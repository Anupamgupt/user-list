import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Users from './components/Users';
import Spinner from './components/Spinner';




function App() {
  const [userList,setUserList]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    try{
      axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res)=>{
        setUserList(res.data)
        setLoading(false)
         
      })
    }catch(error){
      console.log(error)
    }    
  },[])
 
  
  if(!loading){
    return (
      <Router> 
          <Routes>
          <Route exact path="/" element={<Users userList={userList}/>}/>
          </Routes>
      </Router>
      );
    }
  else{
    return(
      <div className='spinner'>
          <Spinner/>
      </div>
    )
  }
}

export default App;
