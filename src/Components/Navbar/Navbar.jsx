import "./Navbar.css"
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
    return(
        <div className="navbar">
            <Link smooth={true} duration={500} to="home" >
            <p>Home</p>
            </Link>
            <Link smooth={true} duration={500} to="about">
            <p>About</p>
            </Link>
            <Link smooth={true} duration={500} to="tech">
            <p>Tech Stack</p>
            </Link>
            <Link smooth={true} duration={500} to="projects">
            <p>Projects</p>
            </Link>
            <Link smooth={true} duration={500} to="achieve">
            <p>Achievements</p>
            </Link>
            <Link smooth={true} duration={500} to="contact">
            <p>Contact</p>
            </Link>
        </div>
    )
}
 export default Navbar;