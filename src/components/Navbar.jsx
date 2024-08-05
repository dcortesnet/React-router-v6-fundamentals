import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#" onClick={handleClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}
