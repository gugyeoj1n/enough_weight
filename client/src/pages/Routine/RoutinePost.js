import './RoutinePost.css'
import React, { useEffect, useState, useRef } from 'react'
import Session from 'react-session-api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavigationBar from '../NavigationBar'
import RoutineItem from './RoutineItem'

function RoutinePost(){
    const navigate = useNavigate()
    const routineRefs = useRef([])

    const [titleInput, setTitleInput] = useState('')
    const [routines, setRoutines] = useState([])

    const createRoutine = () => {
        const newRef = React.createRef()
        setRoutines(routines.concat(<RoutineItem ref={newRef}/>));
    };

    const loginNavigate = () => {
        navigate("/login")
    }

    const postSubmit = async () => {
        if(titleInput.trim() === "" || routines.length === 0)
            return

        const request = {
            title: titleInput,
            content: [],
        }

        for(const routine of routines) {
            const data = await routine.ref.current.getRoutine()
            request.content.push(data)
        }

        console.log(request)

        await axios.post("/routine", request).then(response => {
            console.log(response.data)
        }).catch(e => {
            console.log(e)
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
                    <div className='contentContainer'>
                        {
                            routines
                        }
                    </div>
                </div>
                <button className="plusButton" onClick={ createRoutine }>
                    +
                </button>
                <button className="postButton" onClick={ postSubmit }>
                    등록하기
                </button>
            </div>
            
            <NavigationBar/>
        </div>
    )
}

export default RoutinePost