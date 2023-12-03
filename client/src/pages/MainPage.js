import { useNavigate } from "react-router-dom"
import './MainPage.css'

function MainPage()
{
    const navigate = useNavigate()

    const loginNavigate = () => {
        navigate("/Login")
    }

    return (
        <div>
            <div className="background">
                <div className="topBar">
                    이정욱 제쳤고 ㅋㅋ
                    <div className="account">
                        
                    </div>
                    <div className="search">
                        <img className="searchIcon" src="images/search.svg"/>
                        <input className="searchInput" maxLength={ 20 }/>
                    </div>
                </div>
                <div className="main">
                    오 이게되네 ㅋㅋ
                    <div className="category">
                        <img className="categoryIcon" src="images/menu.png"/>
                    </div>
                </div>
                <div className="navigationBar">
                    <img src="images/home.png" className="navigationItem"/>
                    <img src="images/search.svg" className="navigationItem"/>
                    <img src="images/person.svg" className="navigationItem"/>
                    <img src="images/edit.svg" className="navigationItem"/>
                    <img src="images/setting.svg" className="navigationItem"/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;