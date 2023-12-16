import './Login.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

function Login(){
    const navigate = useNavigate()

    const registerNavigate = () => {
        navigate("/register")
    }

    const [idInput, setIdInput] = useState('')
    const [pwInput, setPwInput] = useState('')

    const loginSubmit = () => {
        if(idInput.trim() === '' || pwInput.trim() === '')
            return
        
        // 로그인 로직 수행 필요
        console.log("LOGIN")
    }

    return (
        <div className="background">
            <div className="titleText">넉쇠</div>
            <div className="input">
                <div className="inputInfo">
                    ID :
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