import { useNavigate } from "react-router-dom"
import './MainPage.css'

function MainPage()
{
    const navigate = useNavigate()

    const loginNavigate = () => {
        navigate("/login")
    }

    const logoutNavigate = () => {
        // 로그인 정보 삭제 필요

        navigate("/login")
    }

    const registerNavigate = () => {
        navigate("/register")
    }

    const profileNavigate = () => {
        navigate("/profile")
    }

    return (
        <div>
            <div className="mainBackground">
                <div className="topBar">
                    <div className="account">
                        <text className="idText">
                            gugyeoj1n
                        </text>
                        <button className="followerText">
                            팔로워 100
                        </button>
                        <button className="followingText">
                            팔로잉 100
                        </button>
                        <button className="registerButton" onClick={ registerNavigate }>
                            회원가입
                        </button>
                        <button className="logoutButton" onClick={ logoutNavigate }>
                            로그아웃
                        </button>
                    </div>
                    <div className="search">
                        <img className="searchIcon" src="images/search.svg"/>
                        <input className="searchInput" maxLength={ 20 }/>
                    </div>
                </div>
                <div className="main">
                    <div className="category">
                        <img className="categoryIcon" src="images/menu.png"/>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <div className="profile">
                                <div className="profileImage"/>
                                <div>
                                    <div className="profileId">
                                        gugyeoj1n
                                    </div>
                                    <div className="profileDate">
                                        2023.12.16 17:11
                                    </div>
                                </div>
                                <div className="likes">
                                    <button className="likeButton">
                                        <img src="images/like.png" className="likeIcon"/>
                                    </button>
                                    <text className="likeText">
                                        100
                                    </text>
                                </div>
                            </div>
                            <div className="content">
                                <text className="contentTitle">
                                    앙기모찌
                                </text>
                                <text className="contentText">
                                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
                                </text>
                                <hr className="line"/>
                                <div className="contentPictures">
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">
                                <div className="profileImage"/>
                                <div>
                                    <div className="profileId">
                                        gugyeoj1n
                                    </div>
                                    <div className="profileDate">
                                        2023.12.16 17:11
                                    </div>
                                </div>
                                <div className="likes">
                                    <button className="likeButton">
                                        <img src="images/like.png" className="likeIcon"/>
                                    </button>
                                    <text className="likeText">
                                        100
                                    </text>
                                </div>
                            </div>
                            <div className="content">
                                <text className="contentTitle">
                                    앙기모찌
                                </text>
                                <text className="contentText">
                                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
                                </text>
                                <hr className="line"/>
                                <div className="contentPictures">
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">
                                <div className="profileImage"/>
                                <div>
                                    <div className="profileId">
                                        gugyeoj1n
                                    </div>
                                    <div className="profileDate">
                                        2023.12.16 17:11
                                    </div>
                                </div>
                                <div className="likes">
                                    <button className="likeButton">
                                        <img src="images/like.png" className="likeIcon"/>
                                    </button>
                                    <text className="likeText">
                                        100
                                    </text>
                                </div>
                            </div>
                            <div className="content">
                                <text className="contentTitle">
                                    앙기모찌
                                </text>
                                <text className="contentText">
                                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
                                </text>
                                <hr className="line"/>
                                <div className="contentPictures">
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">
                                <div className="profileImage"/>
                                <div>
                                    <div className="profileId">
                                        gugyeoj1n
                                    </div>
                                    <div className="profileDate">
                                        2023.12.16 17:11
                                    </div>
                                </div>
                                <div className="likes">
                                    <button className="likeButton">
                                        <img src="images/like.png" className="likeIcon"/>
                                    </button>
                                    <text className="likeText">
                                        100
                                    </text>
                                </div>
                            </div>
                            <div className="content">
                                <text className="contentTitle">
                                    앙기모찌
                                </text>
                                <text className="contentText">
                                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
                                </text>
                                <hr className="line"/>
                                <div className="contentPictures">
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">
                                <div className="profileImage"/>
                                <div>
                                    <div className="profileId">
                                        gugyeoj1n
                                    </div>
                                    <div className="profileDate">
                                        2023.12.16 17:11
                                    </div>
                                </div>
                                <div className="likes">
                                    <button className="likeButton">
                                        <img src="images/like.png" className="likeIcon"/>
                                    </button>
                                    <text className="likeText">
                                        100
                                    </text>
                                </div>
                            </div>
                            <div className="content">
                                <text className="contentTitle">
                                    앙기모찌
                                </text>
                                <text className="contentText">
                                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
                                </text>
                                <hr className="line"/>
                                <div className="contentPictures">
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                    <div className="contentPicture">
                                        사진
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigationBar">
                    <button className="navigationButton">
                        <img src="images/home.png" className="navigationItem"/>
                    </button>
                    <button className="navigationButton">
                        <img src="images/search.svg" className="navigationItem"/>
                    </button>
                    <button className="navigationButton" onClick={ profileNavigate }>
                        <img src="images/person.svg" className="navigationItem"/>
                    </button>
                    <button className="navigationButton">
                        <img src="images/edit.svg" className="navigationItem"/>
                    </button>
                    <button className="navigationButton">
                        <img src="images/setting.svg" className="navigationItem"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;