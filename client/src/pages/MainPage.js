import { useNavigate } from "react-router-dom"

function MainPage()
{
    const navigate = useNavigate()

    const loginNavigate = () => {
        navigate("/Login")
    }

    return (
        <div>
            이정욱 제쳤고 ㅋㅋ
            <button onClick={ loginNavigate }/>
        </div>
    );
}

export default MainPage;