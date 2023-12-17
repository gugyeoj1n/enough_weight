import './NavigationBar.css'
import { useNavigate } from "react-router-dom"

function NavigationBar(){
    const navigate = useNavigate()

    const profileNavigate = () => {
        navigate("/profile")
    }

    const postNavigate = () => {
        navigate("/post_article")
    }

    const mainNavigate = () => {
        navigate("/")
    }

    const searchNavigate = () => {
        navigate("/", { state: { search: true }})
    }

    return (
        <div className="navigationBar">
            <button className="navigationButton" onClick={ mainNavigate }>
                <img src="images/home.png" className="navigationItem"/>
            </button>
            <button className="navigationButton" onClick={ searchNavigate }>
                <img src="images/search.svg" className="navigationItem"/>
            </button>
            <button className="navigationButton" onClick={ profileNavigate }>
                <img src="images/person.svg" className="navigationItem"/>
            </button>
            <button className="navigationButton" onClick={ postNavigate }>
                <img src="images/edit.svg" className="navigationItem"/>
            </button>
        </div>
    )
}

export default NavigationBar