import './ArticlePost.css'
import NavigationBar from '../NavigationBar'
import { useNavigate } from 'react-router-dom'
import Session from 'react-session-api'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ArticlePost(){
    const navigate = useNavigate()

    const [titleInput, setTitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    const loginNavigate = () => {
        navigate("/login")
    }

    const postSubmit = async () => {
        if(titleInput.trim() === "" || contentInput.trim() === "")
            return

        /*const data = {
            title: titleInput,
            content: contentInput,
            pictures: selectedFile
        }*/
        const form = new FormData()
        
        const jsonData = {
            title: titleInput,
            content: contentInput
        }

        form.append("json", JSON.stringify(jsonData))
        for (let i = 0; i < selectedFile.length; i++) {
            console.log(selectedFile[i])
            form.append('pictures', selectedFile[i]);
        }

        await axios.post("/article", form).then(response => {
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
                <textarea className='contentInput' placeholder='내용을 입력하세요' value={ contentInput || '' } onChange={ (e) => {
                    setContentInput(e.target.value)
                }}/>
                <div className="pictureInput">
                    사진 첨부
                    <br/>
                    <br/>
                    <input type="file" onChange={ (e) => {
                        setSelectedFile(e.target.files)
                    }} multiple/>
                </div>
                <button className="postButton" onClick={ postSubmit }>
                    등록하기
                </button>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default ArticlePost