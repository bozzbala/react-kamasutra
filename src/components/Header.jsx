import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header">
                <img src={logo} />
                <input type="text" placeholder="Search"  className="search"/>
                <div className="mini-profile">
                    <a href="#"><i className="fa fa-cog"></i></a>
                    <a href="#"><i className="fa fa-bell"></i></a>
                    <a href="#"><i className="fa fa-user"></i></a>
                </div>
            </div>
        </header>
    );
}

export default Header;