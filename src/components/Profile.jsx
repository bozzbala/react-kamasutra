import Posts from "./Posts";

const Profile = () =>{
    return(
        <div className="content">
            <div className="profile">
                <div className="profile-header">
                    <img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/amsterdam.jpg" />
                </div>
                <div className="profile-info">
                    <div className="profile-avatar">
                        <img src="https://i.pinimg.com/280x280_RS/d9/3d/1e/d93d1e5086667faa7dae8086b76cc314.jpg" />
                    </div>
                    <div className="profile-userinfo">
                        <p className="username">Temirlan Ibragimov</p>
                        <p  className="date">12 Aug 2022</p>
                    </div>
                </div>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;