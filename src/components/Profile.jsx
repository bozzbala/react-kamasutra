import Posts from "./Posts";

const Profile = () =>{
    return(
        <div className="content">
            <div className="profile-header">
                <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/amsterdam.jpg" />
            </div>
            <div className="profile-info">
                ava+desc
            </div>
            <Posts />
        </div>
    );
}

export default Profile;