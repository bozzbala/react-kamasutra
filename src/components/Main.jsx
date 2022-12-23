import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Messages from "./Messages/Messages";
import Aside from "./Aside";

const Main = (props) => {
    return <main className="main-wrapper">
        <Nav/>
        <Routes>
            <Route path="/profile/*" element={<Profile posts={props.posts} dispatch={props.dispatch}
                                                       profile={props.profile}/>} />
            <Route path="/messages/*" element={<Messages dialogs={props.messagesPage.dialogs}
                                                         messages={props.messagesPage.messages}
                                                         newMsgText={props.messagesPage.newMessageText}
                                                         dispatch={props.dispatch}/>} />
        </Routes>
        <Aside/>
    </main>
}

export default Main;
