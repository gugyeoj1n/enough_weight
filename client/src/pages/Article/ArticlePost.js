import './ArticlePost.css'
import NavigationBar from '../NavigationBar'
import { useNavigate } from 'react-router-dom'
import Session from 'react-session-api'
import React, { useEffect } from 'react'

function ArticlePost(){
    const navigate = useNavigate()

    const loginNavigate = () => {
        navigate("/login")
    }

    useEffect(() => {
        if(!Session.get("user_id")) {
            if(window.confirm("로그인된 정보가 없어 로그인 화면으로 이동합니다.")) {
                loginNavigate()
            } else {
                loginNavigate()
            }
        }
    }, [])

    return (
        <div className='background'>
            <div className='titleText'>
                넉쇠
            </div>
            <div className='postBackground'>
                <input className='titleInput' placeholder='제목을 입력하세요'/>
                <textarea className='contentInput' placeholder='내용을 입력하세요'/>
                <div className="pictureInput">
                    사진 첨부
                    <br/>
                    <br/>
                    <input type="file"/>
                </div>
                <button className="postButton">
                    등록하기
                </button>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default ArticlePost