import './ArticleItem.css'
import React, { useEffect, useState } from 'react'
import ImageItem from './ImageItem'

function ArticleItem({ id, title, date, content, pictures }){  
    const imagePath = "/images/"

    useEffect(() => {
        instantiate()
    }, [])

    const [images, setImages] = useState([])

    const instantiate = () => {
        const newArticles = pictures.map(e => {
            const fileName = e.path.match(/[^\/\\]+$/)[0]
            return <ImageItem path={ imagePath + fileName } />
          });
          
          setImages(newArticles)
    }
    
    return (
        <div className="article">
            <div className="profile">
                <div className="profileDate">
                    { date }
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
                    { title }
                </text>
                <text className="contentText">
                    { content }
                </text>
                <hr className="line"/>
                <div className="contentPictures">
                    {
                        images
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleItem