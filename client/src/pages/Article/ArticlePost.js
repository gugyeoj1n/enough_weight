import './ArticlePost.css'
import NavigationBar from '../NavigationBar'

function ArticlePost(){
    return (
        <div className='background'>
            <div className='titleText'>
                넉쇠
            </div>
            <div className='postBackground'>
                <input className='titleInput' placeholder='제목을 입력하세요'/>
                <textarea className='contentInput' placeholder='내용을 입력하세요'/>
                <div className="pictureInput">
                    사진 첨부
                    <br/>
                    <br/>
                    <input type="file"/>
                </div>
                <button className="postButton">
                    등록하기
                </button>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default ArticlePost