import React from "react";
import "./Repo.css";
// import {BsCircleFill} from "react-icons/bs"

const Repo = ({ repos }) => {
  // const circle = <BsCircleFill />;
  return (
    <>
      {/* <h1>asasf</h1> */}
      {repos.map((repo, idx) => (
        <div key={idx} className="repo-wrapper p-3">
          <a
            href={repo.html_url}
            target="_blank"
            className="text-info fw-bold repo-link"
          >
            {repo.full_name}
          </a>
          <div className="d-flex gap-5">
            <h1 className="fw-3 fs-6">{"🟢" + repo.language}</h1>
            <h1 className="fw-3 fs-6">froks: {repo.forks}</h1>
            <h1 className="fw-3 fs-6">stars: {repo.stargazers_count}</h1>
          </div>
          <h1></h1>
        </div>
      ))}
    </>
  );
};

export default Repo;
