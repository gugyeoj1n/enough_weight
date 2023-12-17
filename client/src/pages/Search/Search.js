import './Search.css'
import SearchItem from './SearchItem'
import NavigationBar from '../NavigationBar'
import Session from 'react-session-api'
import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Search(){
    const navigate = useNavigate()
    const location = useLocation()

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
        } else {

        }
    }, [])

    return (
        <div className="background">
            <div className="titleText">
                넉쇠
            </div>
            <div>
                검색 : { location.state.target }
            </div>
            <br/>
            <br/>
            <div className="users">
                {   location.state.result.map((e, idx) => (
                        <SearchItem key={ idx } id={ e.nickname }/>
                    ))
                }
            </div>
            <NavigationBar/>
        </div>
    )
}

export default Search