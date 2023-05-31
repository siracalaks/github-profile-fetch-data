import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserInfo.css";
import Tabs from "./Tabs";
import Repo from "./Repo";
import Events from "./Events";
import UsersContainer from "./UsersContainer";
import Loading from "./Loading";

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [type, setType] = useState("repos");
  const [loading, setLoading] = useState(null);
  // const [infos, setInfos] = useState([]);

  const { pathname } = useLocation();
  console.log(pathname);

  const navigate = useNavigate();

  let BaseURL = "https://api.github.com/users";

  const GetUserInfo = async () => {
    setLoading(true);
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUser(() => [data]);
    setLoading(null);
  };

  const GetUrls = async () => {
    setUsers([]);
    setLoading(true);
    const response = await fetch(BaseURL + pathname + `/${type}`);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
    setLoading(null);
  };

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    // console.log(user);
    // console.log(type);
  }, [pathname, type]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="navigate-button px-5 py-1 my-4"
      >
        BACK
      </button>

      {user &&
        user.map((uinfo, i) => (
          <div
            key={i}
            className="d-flex justify-content-center flex-column gap-5 px-4 flex-md-row px-md-0"
          >
            <img
              src={uinfo.avatar_url}
              alt=""
              className="uinfo-img rounded-4 mx-md-0 mx-auto"
            />
            <div className="fs-3 px- uinfo-text-wrap">
              <h1 className="fs-2 pb-4">{uinfo.name}</h1>
              <h1>
                <span className="uinfo-text">Login_name</span>: {uinfo.login}
              </h1>
              <h1>
                <span className="uinfo-text">Followers</span>:{" "}
                {uinfo.followers}
              </h1>
              <h1>
                <span className="uinfo-text">Following</span>:{" "}
                {uinfo.following}
              </h1>
              <h1>
                <span className="uinfo-text">Public_Repositories</span>:{" "}
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="uinfo-text">Join :</span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="uinfo-visit text-white fw-4 rounded px-4 py-1 text-decoration-none"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      <div className="uinfo-button d-flex justify-content-center mb-5 gap-5 pb-4 text-md-lg mt-5">
        <Tabs type={type} setType={setType} />
      </div>
      {loading && <Loading />}
      {type === "repos" && (
        <div className="mx-auto" id="repo-wrapper">
          {users && <Repo repos={users} />}
        </div>
      )}
      {type === "received_events" && (
        <div id="repo-wrapper">{users && <Events events={users} />}</div>
      )}
      {type === "followers" && (
        <div>
          <UsersContainer users={users} />
        </div>
      )}
    </div>
  );
};

export default UserInfo;
