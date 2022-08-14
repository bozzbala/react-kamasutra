import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/profile" className = { navData => navData.isActive ? 'active' : ''} ><i
                    className="fa-regular fa-user"></i>Profile</NavLink></li>
                <li><NavLink to="/messages"><i className="fa-regular fa-message"></i>Messages</NavLink></li>
                <li><NavLink to="/news"><i className="fa-regular fa-newspaper"></i>News</NavLink></li>
                <li><NavLink to="/music"><i className="fa-solid fa-music"></i>Music</NavLink></li>
                <li><NavLink to="/settings"><i className="fa-solid fa-gears"></i>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;