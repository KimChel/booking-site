import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleClickR = () => {
    navigate("/register")
  }

  const handleClickL = () => {
    navigate("/login")
  }

  return (

    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Kimonbooking</span>
        </Link>
        {user ? user.username:
          (<div className="navItems">
            <button onClick={handleClickR} className="navButton">Register</button>
            <button onClick={handleClickL} className="navButton">Login</button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar