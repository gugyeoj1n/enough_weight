import './Login.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

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
            if(response.data.success === true)
                mainNavigate()
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