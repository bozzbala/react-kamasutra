const Post = (props) => {
    return (
        <div className="post">
            <h2>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;