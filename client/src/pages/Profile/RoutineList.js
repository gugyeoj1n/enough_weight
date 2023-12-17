import './RoutineList.css'
import RoutineItem from './RoutineItem'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RoutineList(){
    useEffect(() => {
        request()
    }, [])

    const [routines, setRoutines] = useState([])

    const request = async () => {
        await axios.get('/profile').then(response => {
            console.log(response.data.userRoutines)
            const newRoutines = response.data.userRoutines.map(e => {
                console.log(e.title)
                const originalDateString = e.createdAt
                const originalDate = new Date(originalDateString)
                const formattedDate = `${originalDate.getFullYear()}. ${String(originalDate.getMonth() + 1).padStart(2, '0')}. ${String(originalDate.getDate()).padStart(2, '0')}. ${String(originalDate.getHours()).padStart(2, '0')}:${String(originalDate.getMinutes()).padStart(2, '0')}`
                return <RoutineItem key={e.id} id={e.author} title={e.title} date={formattedDate} content={e.content} />
              });
        
            setRoutines(newRoutines);
        })
    }
    return (
        <div className="routineContent">
            루틴
            {
                routines
            }
        </div>
    )
}

export default RoutineList