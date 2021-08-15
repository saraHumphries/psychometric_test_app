import { Link } from "react-router-dom";


const NavBar = function() {
    return (
        <nav>
            <h1>Psychometric tests app</h1>
            <ul id='nav-bar'>
                <Link to='/'>Home</Link>
            </ul>
        </nav>
    );
};

export default NavBar;