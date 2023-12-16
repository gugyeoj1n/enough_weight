import './Profile.css'
import React, { useState } from 'react'
import FollowList from './FollowList'
import ArticleList from './ArticleList'
import RoutineList from './RoutineList'
import NavigationBar from '../NavigationBar'

function Profile(){
    // 로그인된 계정의 프로필 페이지라면
    // 관리 버튼을 활헝화하고 아니라면
    // 비활성화하는 로직이 필요함

    const [isFollowOpen, setIsFollowOpen] = useState(false);

    const ManageModal = () => {
        setIsFollowOpen(!isFollowOpen);
    }

    return (
        <div className="background">
            <div className="titleText">
                넉쇠
            </div>
            <div className="accountInfo">
                <div className="id">
                    gugyeoj1n
                </div>
                <div className="follow">
                    <text>
                    팔로우 100
                    </text>
                    <br/>
                    <text>
                    팔로잉 100
                    </text>
                </div>
                <button className="followManageButton" onClick={ ManageModal }>
                        관리
                </button>
            </div>
            <div className="contents">
                <ArticleList/>
                <RoutineList/>
            </div>
            {isFollowOpen && (
            <div className="followModal">
                <div className="followModalContent">
                    <span className="close" onClick={ ManageModal }>&times;</span>
                    <div className="followButtons">
                        <button className="followButton">
                            팔로워
                        </button>
                        <button className="followButton">
                            팔로잉
                        </button>
                    </div>
                    <FollowList/>
                </div>
            </div>
            )}
            <NavigationBar/>
        </div>
    )
}

export default Profile