import Post from "./Post";

const Posts = () => {
    return (
        <div className="my-post">
            My post
            <div className="new-post">
                New post
            </div>
            <Post name="back to you" text="get the fouck youtta here!!!" />
            <Post name="back to me" text="Another post about a singleplayer mode..."/>
        </div>
    );
}

export default Posts;