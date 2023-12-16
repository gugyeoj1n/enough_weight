import './ArticleList.css'
import ArticleItem from './ArticleItem'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function ArticleList(){
    const [decoded, setDecoded] = useState([])
    const decoding = async () => {
        const data = {
            userId: "test"
        }

        await axios.post('/api/test', data).then(response => {
            setDecoded(response.data.decoded)
        })
    }

    useEffect(() => {
        //decoding()
    }, [])

    return (
        <div className="articles">
            {/*
            {decoded.map((item, idx) => (
                <ArticleItem 
                    id={  }
                    date={  }
                    likes={  }
                    title={  }
                    content={  }/>
            ))}
            */}
        </div>
    )
}

export default ArticleList