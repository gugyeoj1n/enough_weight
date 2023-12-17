import './SearchItem.css'
import axios from 'axios'
import React, { useEffect } from 'react'
import Session from 'react-session-api'

function SearchItem({ id }){

    const followRequest = async () => {
        const data = {
            nickname: id
        }
        await axios.post("/following/follow", data).then(response => {
            if(response.status === 200) {
                const btn = document.getElementById(id)
                btn.removeEventListener('click', followRequest)
                console.log("팔로우 성공")
            }
        })
    }

    useEffect(() => {
        const following = Session.get("user_following")
        if(following.length === 0) {
            const btn = document.getElementById(id)
            btn.addEventListener('click', followRequest)
        }
        following.forEach(item => {
            console.log("찾는 아이템 : " + item)
            if(item === id) {
                console.log("팔로우 중임")
                // 이미 팔로우하고 있는 것
            } else {
                console.log("팔로우 안함")
                const btn = document.getElementById(id)
                btn.addEventListener('click', followRequest)
            }
        })

    })

    return (
        <div className="searchItem">
            <text className="followName">
                { id }
            </text>
            <div className="followInteractButtons">
                <button id={ id } className="followInteractButton">
                    <img src="images/person.svg" className="followInteractIcon"/>
                </button>
                <button id="delete" className="followInteractButton">
                    <img src="images/delete.png" className="followInteractIcon"/>
                </button>
            </div>
        </div>
    )
}

export default SearchItem