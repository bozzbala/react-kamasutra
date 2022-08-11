import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/profile" className = { navData => navData.isActive ? 'active' : ''} >Profile</NavLink></li>
                <li><NavLink to="/messages">Messages</NavLink></li>
                <li><NavLink to="#">News</NavLink></li>
                <li><NavLink to="#">Music</NavLink></li>
                <li><NavLink to="#">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;