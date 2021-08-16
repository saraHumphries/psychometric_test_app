import { Link } from "react-router-dom";


const NavBar = function() {
    return (
        <nav>
            <ul id='nav-bar'>
                <Link to='/'>Home</Link>
            </ul>
            <h1>Psychometric tests app</h1>
            
        </nav>
    );
};

export default NavBar;