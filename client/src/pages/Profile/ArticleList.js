import './ArticleList.css'
import ArticleItem from './ArticleItem'

function ArticleList(){
    return (
        <div className="articleContent">
            게시글
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
        </div>
    )
}

export default ArticleList