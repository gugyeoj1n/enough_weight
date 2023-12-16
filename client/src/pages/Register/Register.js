import './Register.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register(){
    const navigate = useNavigate()

    const [emailInput, setEmailInput] = useState('')
    const [idInput, setIdInput] = useState('')
    const [pwInput, setPwInput] = useState('')

    const loginNavigate = () => {
        navigate("/login")
    }

    const data = {
        email: emailInput,
        nickname: idInput,
        password: pwInput
    }

    const request = async () => {
        await axios.post('/auth/join', data).then(response => {
            if(response.data.success === true)
                loginNavigate()
        })
    }

    const registerSubmit = () => {
        if(emailInput.trim() === '' || idInput.trim() === '' || pwInput.trim() === '')
            return
        
        request()
    }

    return (
        <div className="background">
            <div className="titleText">
                넉쇠
            </div>
            <div className="input">
                <div className="inputInfo">
                    EMAIL :
                </div>
                <input type="email" value={ emailInput || '' } onChange={ (e) => {
                    setEmailInput(e.target.value)
                }}/>
            </div>
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
                <input type="text" value={ pwInput || '' } onChange={ (e) => {
                    setPwInput(e.target.value)
                }}/>
            </div>
            <button className="submitButton" onClick={ registerSubmit }>
                회원가입
            </button>
        </div>
    )
}

export default Register;