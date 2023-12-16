import { useNavigate } from "react-router-dom"
import './MainPage.css'
import ArticleList from "./ArticleList"
import axios from 'axios'

function MainPage()
{
    const navigate = useNavigate()

    const loginNavigate = () => {
        navigate("/login")
    }

    const logout = () => {
        if(window.confirm("정말 로그아웃하시겠습니까?")) {
            logoutSubmit()
        }
    }

    const logoutSubmit = async () => {
        await axios.get('/auth/logout').then(response => {
            if(response.data.success === true)
                logoutNavigate()
        })
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
                        <button className="logoutButton" onClick={ logout }>
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
                    <ArticleList/>
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