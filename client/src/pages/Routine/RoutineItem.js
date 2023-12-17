import './RoutineItem.css'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

const RoutineItem = forwardRef((props, ref) => {
    const [text, setText] = useState('')
    const [number, setNumber] = useState(0)

    useImperativeHandle(ref, () => ({
        getRoutine
    }))

    const getRoutine = async () => {
        console.log("GET ROUTINE 실행")
            const data = {
                name: text,
                repeats: number.toString
            }

         return data
    }

    return (
        <div className='routineItemBackground'>
            루틴
            <input type="text" value={ text } onChange={ (e) => {
                setText(e.target.value)
            }} className='routineInput'/>
            <input type="number" value={ number } onChange={ (e) => {
                setNumber(e.target.value)
            }} className='routineInput'/>
        </div>
    )
})

export default RoutineItem