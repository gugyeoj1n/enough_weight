import './ArticleList.css'
import ArticleItem from './ArticleItem'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Session from 'react-session-api'

function ArticleList(){
    useEffect(() => {
        getArticles()
    }, [])

    const [articles, setArticles] = useState([])

    const getArticles = async () => {
        await axios.get('/feed').then(response => {
            response.data.articles.forEach(e => {
                const originalDateString = e.createdAt
                const originalDate = new Date(originalDateString)
                const formattedDate = `${originalDate.getFullYear()}. ${String(originalDate.getMonth() + 1).padStart(2, '0')}. ${String(originalDate.getDate()).padStart(2, '0')}. ${String(originalDate.getHours()).padStart(2, '0')}:${String(originalDate.getMinutes()).padStart(2, '0')}`

                setArticles(articles.concat(<ArticleItem id={ e.author } date={ formattedDate } title={ e.title } content={ e.content } />))
            })
        })
    }

    return (
        <div className="articles">
            {
                articles
            }
            <ArticleItem/>
            <ArticleItem/>
            <ArticleItem/>
        </div>
    )
}

export default ArticleList