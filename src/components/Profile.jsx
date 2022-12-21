import Posts from "./Posts/Posts";

const Profile = (props) =>{
    return(
        <div className="content">
            <div className="profile">
                <div className="profile-header">
                    <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/amsterdam.jpg"
                    alt="header"/>
                </div>
                <div className="profile-info">
                    <div className="profile-avatar">
                        <img src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile.-male-face-icon.-vector-illustration..jpg"
                             alt="avatar"/>
                    </div>
                    <div className="profile-userinfo">
                        <p  className="username">Temirlan Ibragimov</p>
                        <p  className="date">26 Aug 2022</p>
                    </div>
                </div>
            </div>
            <Posts posts={props.posts} addPost={props.addPost}
                   updateNewPost={props.updateNewPost}
                   profile={props.profile}/>
        </div>
    );
}

export default Profile;