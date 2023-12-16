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

        navigate("/register")
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
                        <button className="registerButton">
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
                                프로필 사진이랑 이름 게시날짜 좋아요수
                            </div>
                            <div className="content">
                                내용
                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">

                            </div>
                            <div className="content">

                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">

                            </div>
                            <div className="content">

                            </div>
                        </div>
                        <div className="article">
                            <div className="profile">

                            </div>
                            <div className="content">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigationBar">
                    <img src="images/home.png" className="navigationItem"/>
                    <img src="images/search.svg" className="navigationItem"/>
                    <img src="images/person.svg" className="navigationItem"/>
                    <img src="images/edit.svg" className="navigationItem"/>
                    <img src="images/setting.svg" className="navigationItem"/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;