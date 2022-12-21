import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Messages from "./Messages/Messages";
import Aside from "./Aside";

const Main = (props) => {
    return <main className="main-wrapper">
        <Nav/>
        <Routes>
            <Route path="/profile/*" element={<Profile posts={props.posts} addPost={props.addPost}
                                                       updateNewPost={props.updateNewPost}
                                                       profile={props.profile}/>} />
            <Route path="/messages/*" element={<Messages dialogs={props.dialogs} messages={props.messages}/>} />
        </Routes>
        <Aside/>
    </main>
}

export default Main;
