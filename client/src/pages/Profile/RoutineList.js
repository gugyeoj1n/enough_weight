import './RoutineList.css'
import RoutineItem from './RoutineItem'

function RoutineList(){
    return (
        <div className="routineContent">
            루틴
            <RoutineItem/>
            <RoutineItem/>
        </div>
    )
}

export default RoutineList