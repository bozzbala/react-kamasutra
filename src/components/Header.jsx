import logo from "../images/logo.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header">
                <img src={logo} />
                <input type="text" placeholder="Search"  className="search"/>
                <div className="mini-profile">
                    <NavLink to="#"><i className="fa fa-cog"></i></NavLink>
                    <NavLink to="#"><i className="fa fa-bell"></i></NavLink>
                    <NavLink to="#"><i className="fa fa-user"></i></NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;