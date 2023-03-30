import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar sticky-top">
      <div className="container">
        <span className="logo"> <span className="PHWORD">P</span>ortfolio <span className="PHWORD">H</span>ub</span>
        <nav>
          <NavLink to="./" end>Home</NavLink>
          <NavLink to="./about" end>About Me</NavLink>
          <NavLink to="./project" end>Projects</NavLink>
          <NavLink to="./contact" end>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar