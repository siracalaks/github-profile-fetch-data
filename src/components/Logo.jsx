import React from "react";
import {GoMarkGithub} from "react-icons/go";
import './Logo.css';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="d-flex justify-content-center gap-3 text-white">
        <Link to="/">
          <GoMarkGithub className="github-icon" />
        </Link>
      <h1>Github Users</h1>
    </div>
  );
};

export default Logo;
