import React, { useEffect, useRef, useState } from "react";
import UsersContainer from "./UsersContainer";
import './Users.css';
import Loading from "./Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let BaseURL = "https://api.github.com/users";
  const user = useRef();

  const AllUsers = async () => {
    if (user.current.value === "") {
      setLoading(true)
    const response = await fetch(BaseURL);
    const data = await response.json();
    // console.log(data);
    setUsers(data);  
    setLoading(null)    
    }

  };

  const FindUser = async () => {
    // console.log(user.current.value);
    if (user.current.value !== "") {
      setLoading(true)
      setUsers("");
      const res = await fetch(BaseURL+"/"+user.current.value);
      const data = await res.json();
      console.log(data);
      setUsers(() => [data])
      user.current.value = "";
      setLoading(null)
    } else {
      AllUsers();
    }
  }

  useEffect(() => {
    console.log("Fetching users...");
    // console.log(fetchUsers());
    AllUsers();
  }, [setUsers]);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <input type="text" placeholder="Search github username..." className="user-input py-1" ref={user} />
        <button onClick={FindUser} className="input-search">Search</button>
      </div>

      { loading ? <Loading /> : <UsersContainer users={users} /> }
      
    </div>
  );
};

export default Users;
