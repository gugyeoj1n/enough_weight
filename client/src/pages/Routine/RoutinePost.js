import './RoutinePost.css'
import React, { useEffect, useState } from 'react'
import Session from 'react-session-api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavigationBar from '../NavigationBar'

function RoutinePost(){
    const navigate = useNavigate()

    const [titleInput, setTitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')

    const loginNavigate = () => {
        navigate("/login")
    }

    const postSubmit = async () => {
        if(titleInput.trim() === "" || contentInput.trim() === "")
            return

        const data = {
            title: titleInput,
            content: contentInput
        }

        await axios.post("/article", data).then(response => {
            console.log(response.data)
        })
    }

    useEffect(() => {
        if(!Session.get("user_id")) {
            if(window.confirm("로그인된 정보가 없어 로그인 화면으로 이동합니다.")) {
                loginNavigate()
            } else {
                loginNavigate()
            }
        } else {
            // 자기 꺼 불러오기
        }
    }, [])

    return (
        <div className='background'>
            <div className='titleText'>
                넉쇠
            </div>
            <div className='postBackground'>
                <input type="text" className='titleInput' placeholder='제목을 입력하세요' value={ titleInput || '' } onChange={ (e) => {
                    setTitleInput(e.target.value)
                }}/>
                <div className='contentBackground'>

                </div>
                <button className="postButton" onClick={ postSubmit }>
                    등록하기
                </button>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default RoutinePost