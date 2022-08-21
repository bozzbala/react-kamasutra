import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main dialogs={props.dialogs} messages={props.messages} posts={props.posts} />
            </div>
        </BrowserRouter>
    );
}

export default App;
