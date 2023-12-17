import './RoutineItem.css'

function RoutineItem(){
    return (
        <div className="article">
            <div className="profile">
                <div className="profileDate">
                    2023. 12. 17
                </div>
                <div className="likes">
                    <button className="likeButton">
                        <img src="images/like.png" className="likeIcon"/>
                    </button>
                    <text className="likeText">
                        11
                    </text>
                </div>
                <button className="editButton">
                    <img src="images/edit.svg" className="likeIcon"/>
                </button>
                <button className="editButton">
                    <img src="images/delete.png" className="likeIcon"/>
                </button>
            </div>
            <div className="content">
                <text className="routineTitle">
                    앙김옥지
                </text>
                <div className="contentList">
                    <div className="exercise">
                        <text className="exerciseName">
                            벤치프레스
                        </text>
                        <text className="repeat">
                            15회 3세트
                        </text>
                    </div>
                    <div className="exercise">
                        <text className="exerciseName">
                            인클라인 벤치프레스
                        </text>
                        <text className="repeat">
                            15회 3세트
                        </text>
                    </div>
                    <div className="exercise">
                        <text className="exerciseName">
                            케이블 크로스오버
                        </text>
                        <text className="repeat">
                            15회 3세트
                        </text>
                    </div>
                    <div className="exercise">
                        <text className="exerciseName">
                            딥스
                        </text>
                        <text className="repeat">
                            15회 3세트
                        </text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoutineItem