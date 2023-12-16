import './Register.css'
import React, { useState } from 'react'

function Register(){
    const [emailInput, setEmailInput] = useState('')
    const [idInput, setIdInput] = useState('')
    const [pwInput, setPwInput] = useState('')

    const registerSubmit = () => {
        if(emailInput.trim() === '' || idInput.trim() === '' || pwInput.trim() === '')
            return
        
        // 회원가입 로직 수행 필요
        console.log("REGISTER")
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