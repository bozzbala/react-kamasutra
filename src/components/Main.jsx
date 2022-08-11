import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";
import Messages from "./Messages";
import Aside from "./Aside";

const Main = () => {
    return <main className="main-wrapper">
        <Nav/>
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
        </Routes>
        <Aside/>
    </main>
}

export default Main;
