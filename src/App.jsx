import "./App.css";
import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";


function App() {
  return (
    <div className="min-vh-100 bg-black">
      <div className="container-fluid text-white py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
