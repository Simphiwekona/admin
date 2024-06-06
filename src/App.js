import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Avator from "./assests/user.png";
import { useState } from "react";





const Navbar = () => {

  const [open, setOpen] = useState(false);

  let userid = 1;

const handleOpenDropdown = (userid) => {
  setOpen(open === userid ? null : userid);
};
  return (
    <nav className="navbar-container">
      <button className="avator" onClick={() => handleOpenDropdown(userid)}>
        <img src={Avator} alt="avator" />
        {/* <span>Simphiwe</span> */}
        {open === userid && (
          <ul className="menu">
            <li className="menu-item">
              <button>Profile</button>
            </li>
            <li className="menu-item">
              <button>Logout</button>
            </li>
          </ul>
        )}
        
      </button>
    </nav>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(true)
  }
  return(
    <div className="side-nav">
      <div className="sidebar-btn">
        <button onClick={handleDropdown}>New</button>
        {open && (
          <ul className="dropdown">
            <li className="menu-item">
              <button>Quotation</button>
            </li>
          </ul>
        )}
      </div>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
