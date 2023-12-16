import './Profile.css'
import React, { useState } from 'react'
import FollowList from './FollowList'

function Profile(){
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
        </div>
    )
}

export default Profile