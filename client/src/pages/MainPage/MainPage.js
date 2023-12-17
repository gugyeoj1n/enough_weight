import { useNavigate, useLocation } from "react-router-dom"
import './MainPage.css'
import ArticleList from "./ArticleList"
import NavigationBar from "../NavigationBar"
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Session from 'react-session-api'

function MainPage()
{
    const navigate = useNavigate()
    const location = useLocation()
    const searchRef = useRef(null)

    const [searchInput, setSearchInput] = useState('')

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
        Session.remove("user_id")
        Session.remove("user_nickname")
        Session.remove("user_following")
        Session.remove("user_follower")

        navigate("/login")
    }

    const registerNavigate = () => {
        if(window.confirm("정말 로그아웃하시겠습니까?")) {
            const logout = async () => {
                await axios.get('/auth/logout').then(response => {
                    console.log(response.data)
                    if(response.data.success === true) {
                        Session.remove("user_id")
                        Session.remove("user_nickname")
                        Session.remove("user_following")
                        Session.remove("user_follower")
                        navigate("/register")
                    }
                })
            }

            logout()
        }
    }

    const enterKeyDown = (e) => {
        if(e.key == 'Enter') {
            if(searchInput.trim() === "")
                return

            searchSubmit()
        }
    }

    const searchSubmit = async () => {
        const url = '/search?nickname=' + searchInput
        console.log(url)
        await axios.get(url).then(response => {
            console.log(response.data)
        })
    }

    const backToLogin = () => {
        if(window.confirm("로그인된 정보가 없어 로그인 화면으로 이동합니다.")) {
            loginNavigate()
        } else {
            loginNavigate()
        }
    }

    useEffect(() => {
        if(!Session.get("user_id") || !Session.get("user_nickname") || !Session.get("user_follower") || !Session.get("user_following")) {
            backToLogin()
        } else {
            // 로그인된 계정의 정보를 담은 요청을 보내서
            // 팔로우하는 사람들의 최신 게시글을 가져와야 됨
            try {
                if(location.state.search)
                    searchRef.current.focus()
            }
            catch {

            }
        }
    }, [])

    return (
        <div>
            <div className="mainBackground">
                <div className="topBar">
                    <div className="account">
                        <text className="idText">
                            { Session.get("user_nickname") }
                        </text>
                        <button className="followerText">
                            팔로워 { () => {
                                try {
                                    return Session.get("user_follower").length
                                } catch {
                                    backToLogin()
                                }
                            }}
                        </button>
                        <button className="followingText">
                            팔로잉 { () => {
                                try {
                                    return Session.get("user_following").length
                                } catch {
                                    backToLogin()
                                }
                            }}
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
                        <input ref= { searchRef } className="searchInput" maxLength={ 20 } placeholder="닉네임을 입력하세요" value={ searchInput || '' } onChange={ (e) => {
                        setSearchInput(e.target.value)
                        }} onKeyDown={ enterKeyDown }/>
                    </div>
                </div>
                <div className="main">
                    <div className="category">
                        <img className="categoryIcon" src="images/menu.png"/>
                    </div>
                    <ArticleList/>
                </div>
                <NavigationBar/>
            </div>
        </div>
    );
}

export default MainPage;