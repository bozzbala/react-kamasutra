import Post from "./Post";

const Posts = (props) => {

    let PostsElement = props.posts.map(p => <Post postTitle={p.postTitle} text={p.text}/>)

    return (
        <div className="my-post">
            <div className="new-post">
                <p className="new-post-add">New post:</p>
                <textarea></textarea>
                <button className="send">Send</button>
            </div>
            <p className="posts-title">Posts:</p>
            {PostsElement}
        </div>
    );
}

export default Posts;