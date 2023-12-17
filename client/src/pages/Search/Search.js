import './Search.css'
import SearchItem from './SearchItem'
import NavigationBar from '../NavigationBar'
import Session from 'react-session-api'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Search(){
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
        } else {
            // 자기 꺼 불러오기
        }
    }, [])

    return (
        <div className="background">
            <div className="titleText">
                넉쇠
            </div>
            <div>
                검색 : SIUU
            </div>
            <br/>
            <br/>
            <div className="users">
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default Search