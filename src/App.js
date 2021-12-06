import React, { useState } from 'react';
import LogInForm from './components/LogInForm';

function App() {
  const adminUser = {
    email: "shantialouis@gmail.com",
    password: "fincode"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
         
       if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });

     }  else {
        console.log("Details does not match!");
        setError("Details does not match!");
      }
  }
    

const Logout = () => {
  setUser({name: "", email: "" });
}


  return (
    <div className = "App">
    {(user.email !== "") ? (
      <div className = "welcome">
      <h2> Welcome, <span>{user.name}</span></h2>
      <button onClick = {Logout}>Logout</button>
      </div>
    ) : (
      <LogInForm Login = {Login} error = {error} />
    )}
      
    </div>
  );
    }


export default App;
