import Post from "./Post";

let PostsData = [
    {id: 1, text:"Just got my new car. Going to drive around a town tonight. Join me up!", postTitle:"New car"},
    {id: 2, text:"That's cool", postTitle:"Done"},
    {id: 3, text:"Waiting in the queue for my new car documents...", postTitle:"Documents"}
]

let PostsElement = [
    <Post postTitle={PostsData[0].postTitle} text={PostsData[0].text} />,
    <Post postTitle={PostsData[1].postTitle} text={PostsData[1].text} />,
    <Post postTitle={PostsData[2].postTitle} text={PostsData[2].text} />
]
const Posts = () => {
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