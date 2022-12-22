import Post from "./Post";
import {createRef} from "react";

const Posts = (props) => {

    let PostsElement = props.posts.map(p => <Post postTitle={p.postTitle} text={p.text}/>)
    let title = createRef();
    let text = createRef();

    let onPostChange = () =>{
        let newText = text.current.value;
        let newTitle = title.current.value;
        let action = {
            type: "UPDATE-NEW-POST",
            args: {newText, newTitle},
        }
        props.dispatch(action)
        console.log(newTitle + " " + newText)
    }
    let addPost = () =>{
        let action = {
            type: "ADD-POST",
        }
        props.dispatch(action);
    }

    return (
        <div className="my-post">
            <div className="new-post">
                <form>
                    <p className="new-post-add">New post:</p>
                    <input type="text" placeholder="Title" ref={title}
                           onChange={onPostChange}
                           value={props.profile.newPostTitle}/>
                    <textarea placeholder="Text" ref={text}
                              onChange={onPostChange} value={props.profile.newPostText} />
                    <button
                        className="send" onClick={ addPost} type="button">Send</button>
                </form>
            </div>
            <p className="posts-title">Posts:</p>
            {PostsElement}
        </div>
    );
}

export default Posts;