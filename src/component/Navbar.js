import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles.css/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [Expand, setExpand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <div className="navbar" id={Expand ? "open" : "close"}>
      <div className="toggleButton" onClick={() => setExpand((prev) => !prev)}>
        <button>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Navbar;
