import React from "react";
import "./UsersContainer.css";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {
  return (
    <div className="d-flex gap-5 flex-wrap justify-content-center py-5">
      {users &&
        users.map((user, idx) => (
          user?.login && (
          <div key={idx} className="d-flex flex-column align-items-center users-container">
            <img src={user.avatar_url} alt="" className="users-img" />
            <h1 className="users-login">{user.login}</h1>
            <h1 className="users-name">{user.name}</h1>
            <Link to={`/${user.login}`}>
              <span className="users-view">View</span>
            </Link>
          </div>            
          )

        ))}
    </div>
  );
};

export default UsersContainer;
