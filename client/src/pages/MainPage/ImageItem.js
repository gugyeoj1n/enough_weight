import './ImageItem.css'

function ImageItem({ path }){
    return (
        <img src={ path } className="contentPicture"/>
    )
}

export default ImageItem