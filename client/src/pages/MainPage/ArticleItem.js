import './ArticleItem.css'

function ArticleItem(){
    return (
        <div className="article">
            <div className="profile">
                <div className="profileImage"/>
                <div>
                    <div className="profileId">
                        gugyeoj1n
                    </div>
                    <div className="profileDate">
                        2023.12.16 17:11
                    </div>
                </div>
                <div className="likes">
                    <button className="likeButton">
                        <img src="images/like.png" className="likeIcon"/>
                    </button>
                    <text className="likeText">
                        100
                    </text>
                </div>
            </div>
            <div className="content">
                <text className="contentTitle">
                    앙기모찌
                </text>
                <text className="contentText">
                    이저알머이낢ㄴ이ㅏ런ㅇ리ㅏㄴ
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