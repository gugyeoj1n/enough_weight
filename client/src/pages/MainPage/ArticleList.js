import './ArticleList.css'
import ArticleItem from './ArticleItem'

function ArticleList(){
    return (
        <div className="articles">
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
        </div>
    )
}

export default ArticleList