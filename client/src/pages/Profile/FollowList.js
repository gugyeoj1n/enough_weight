import './FollowList.css'
import FollowItem from './FollowItem'

function FollowList(){
    return (
        <div className="followList">
            <div className="followListContainer">
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
			<FollowItem id={ "d" }/>
            </div>
        </div>
    )
}

export default FollowList

/* 이거 참고해서 하기
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import axios from 'axios'
import { useTodoState } from '../../TodoContext'

const TodoListBlock = styled.div`
  	flex: 1;
  	padding: 20px 32px;
  	padding-bottom: 48px;
  	overflow-y: auto;
`
function TodoList() {
	const [decoded, setDecoded] = useState("")
	const todos = useTodoState()
	const decoding = async () => {
		await axios.get('/api/users/decode').then(response => {
			setDecoded(response.data.decoded)
		})
	}
	useEffect(() => {
		decoding()
	}, [])
	
  	return (
  		<TodoListBlock>
			{todos.filter(todo => todo.userName === decoded).map((todo, idx) => (
				<TodoItem 
					key={ idx }
					id={ todo.id }
					text={ todo.text }
					done={ todo.done }
					userName={ todo.userName }
				/>
			))}
		</TodoListBlock>
	)
}*/