import React, { useState, useEffect } from 'react'
import { auth} from './firebase/init'
import Nav from './components/Nav'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}
from 'firebase/auth'

function App() {
  const [user, setUser] = useState({})
const [loading, setLoading] = useState(true);
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser(user);
        
      }
    })
  }, [user])
  function register() {
   
   createUserWithEmailAndPassword( auth , 'ola@gmail.com', 'password')
   .then((user) => {
    alert("Successfully registered now you may login :)")
   })
   .catch((error) => {
    alert(error);
   })
  
  }
  function login(){
    signInWithEmailAndPassword(auth, 'ola@gmail.com', 'password')
    .then(({user}) =>{
      setUser(user);
    }).catch((error) => {
      alert(error)
    })

    
  }
  
  function logout(){
   signOut(auth)
   setUser({})  
   
  }
  return (
    <div className="App">
      <Nav register={register} login={login} loading={loading} user={user} logout={logout}/>
    </div>
  )
}

export default App
