import './ArticleItem.css'

function ArticleItem({ id, date, likes, title, content }){
    return (
        <div className="article">
            <div className="profile">
                <div className="profileImage"/>
                <div>
                    <div className="profileId">
                        {id}
                    </div>
                    <div className="profileDate">
                        {date}
                    </div>
                </div>
                <div className="likes">
                    <button className="likeButton">
                        <img src="images/like.png" className="likeIcon"/>
                    </button>
                    <text className="likeText">
                        {likes}
                    </text>
                </div>
            </div>
            <div className="content">
                <text className="contentTitle">
                    {title}
                </text>
                <text className="contentText">
                    {content}
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