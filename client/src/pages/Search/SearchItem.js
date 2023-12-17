import './SearchItem.css'

function SearchItem({ id }){
    return (
        <div className="searchItem">
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

export default SearchItem