export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="flexRow leftPanel">
                    <img className="icons" src="./assets/header/hamburger-menu.svg" alt="menuLogo" />
                    <img className="hlogo" src="./assets/header/youtube-logo.svg" alt="youtubeLogo" />
                </div>
                <div className="flexRow middlePanel">
                    <form action="/search" className="middlePanel flexRow">     
                        <input  className="seachBar" type="text" name="search" id="search" autoComplete="off" placeholder="Search"/>
                        <button  className="searchBtn" name="search"> 
                            <img  className="seachBtnIcon" src="./assets/header/search.svg" alt="search" />
                        </button>
                        <img  className="icons micBtn" src="./assets/header/voice-search-icon.svg" alt="voice-search" />
                    </form>
                </div>
                <div className="flexRow rightPanel">
                    <img className="icons" src="./assets/header/upload.svg" alt="upload" />
                    <img className="icons" src="./assets/header/notifications.svg" alt="notifications" />
                    <img className="icons circleContainer profilePicSize" src="./assets/header/channels4_profile.jpg" alt="profilePic" />
                </div>
            </div>
        </div>
    )
}
