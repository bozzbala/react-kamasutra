import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path}>
            <div className="messages-user">
                <img src={props.avatar}/>
                <div className="messages-username">{props.username}</div>
            </div>
        </NavLink>);
}

export default Dialog;