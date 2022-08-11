const Post = (props) => {
    return (
        <div className="post">
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;