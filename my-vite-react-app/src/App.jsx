import React, { useState, useEffect } from "react";
import axios from 'axios'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const names = ["dishan", "gimhan"];
  const [users, setUsers] = useState([]);

/*   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    fetchUsers();
  }, []); */


useEffect(()=>{
  const fetchUsers = async()=>{
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    }catch(err){
      console.log(err)
    }
  }
  fetchUsers();
},[])

  
  return (
    <>
<ul>
  {users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>


    
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* <div className="card">
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div> */}

     {/*  <div className="card">
        <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        </ul>
      </div> */}


    </>
  );
};

export default App;
