import Post from "./Post";

const Posts = () => {
    return (
        <div className="my-post">
            <div className="new-post">
                <p className="new-post-add">New post:</p>
                <textarea></textarea>
                <button className="send">Send</button>
            </div>
            <p className="posts-title">Posts:</p>
            <Post name="back to you" text="get the fouck youtta here!!!" />
            <Post name="back to me" text="Another post about a singleplayer mode..."/>
        </div>
    );
}

export default Posts;