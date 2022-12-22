import './App.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/Main";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}
                      posts={props.state.profilePage.posts} dispatch={props.dispatch} profile={props.state.profilePage}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
