import './ArticleItem.css'

function ArticleItem(){
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
                <text className="contentTitle">
                    앙김옥지
                </text>
                <text className="contentText">
                    앙김옥지앙김옥지앙김옥지앙김옥지
                </text>
                <hr className="line"/>
                <div className="contentPictures">
                    <div className="contentPicture">
                        사진
                    </div>
                    <div className="contentPicture">
                        사진
                    </div>
                    <div className="contentPicture">
                        사진
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem