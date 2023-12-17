import './Login.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import Session from 'react-session-api'

function Login(){
    const navigate = useNavigate()

    const registerNavigate = () => {
        navigate("/register")
    }

    const mainNavigate = () => {
        navigate("/")
    }

    const [idInput, setIdInput] = useState('')
    const [pwInput, setPwInput] = useState('')

    const data = {
        email: idInput,
        password: pwInput
    }

    const request = async () => {
        await axios.post('/auth/login', data).then(response => {
            if(response.data.success === true) {
                const getUserData = async () => {
                    await axios.get("/auth/user").then(response => {
                        const user = response.data.user
                        Session.set("user_nickname", user.nickname)
                        Session.set("user_id", user._id)
                        mainNavigate()
                    })
                }

                getUserData()
            }
            else {
                window.confirm("일치하는 회원이 존재하지 않거나 오류가 발생했습니다.")
            }
        })
    }

    const loginSubmit = () => {
        if(idInput.trim() === '' || pwInput.trim() === '')
            return
        
        request()
        console.log("LOGIN")
    }

    return (
        <div className="background">
            <div className="titleText">넉쇠</div>
            <div className="input">
                <div className="inputInfo">
                    EMAIL :
                </div>
                <input type="text" value={ idInput || '' } onChange={ (e) => {
                    setIdInput(e.target.value)
                }}/>
            </div>
            <div className="input">
                <div className="inputInfo">
                    PW :
                </div>
                <input type="password" value={ pwInput || '' } onChange={ (e) => {
                    setPwInput(e.target.value)
                }}/>
            </div>
            <div className="input">
                <button className="submitButton" onClick={ loginSubmit }>
                    로그인
                </button>
                <button className="submitButton" onClick={ registerNavigate }>
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default Login