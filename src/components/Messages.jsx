import {NavLink, Route, Routes} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path}>
            <div className="messages-user">
                <img src={props.avatar}/>
                <div className="messages-username">{props.name}</div>
            </div>
        </NavLink>);
}

const Message = (props) => {
    return(
        <div>props.message
            <br />
            Hello</div>
    );
}

const Messages = () => {
    return (
        <div className="content">
            <div className="messages">
                <div className="messages-users">
                    <Dialog name="Arman" id="1"
                            avatar="https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"/>
                    <Dialog name="Ayazhan" id="2"
                            avatar="https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"/>
                    <Dialog name="Batyr" id="3"
                            avatar="https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"/>
                    <Dialog name="Temir" id="4"
                            avatar="https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"/>
                    <Dialog name="Sasha" id="5"
                            avatar="https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"/>
                </div>
                <div className="messages-all">
                    <Routes>
                        <Route path="/messages/1" element={<Message/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Messages;
