import './ArticleList.css'
import ArticleItem from './ArticleItem'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ArticleList(){
    const [articles, setArticles] = useState([])

    useEffect(() => {
        request()
    }, [])

    const request = async () => {
        await axios.get('/profile').then(response => {
            const newArticles = response.data.userArticles.map(e => {
                console.log(e.title)
                const originalDateString = e.createdAt
                const originalDate = new Date(originalDateString)
                const formattedDate = `${originalDate.getFullYear()}. ${String(originalDate.getMonth() + 1).padStart(2, '0')}. ${String(originalDate.getDate()).padStart(2, '0')}. ${String(originalDate.getHours()).padStart(2, '0')}:${String(originalDate.getMinutes()).padStart(2, '0')}`
                return <ArticleItem key={e.id} id={e.author} title={e.title} date={formattedDate} content={e.content} pictures={e.pictures} />
              });
        
              setArticles(newArticles);
        })
    }

    return (
        <div className="articleContent">
            게시글
            {
                articles
            }
        </div>
    )
}

export default ArticleList