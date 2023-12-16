import './FollowItem.css'

function FollowItem({ id }){
    return (
        <div className="followItem">
            <text className="followName">
                { id }
            </text>
            <div className="followInteractButtons">
                <button className="followInteractButton">
                    <img src="images/person.svg" className="followInteractIcon"/>
                </button>
                <button className="followInteractButton">
                    <img src="images/delete.png" className="followInteractIcon"/>
                </button>
            </div>
        </div>
    )
}

export default FollowItem