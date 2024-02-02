import "./components/auth/login/Login.css"
import {useNavigate} from "react-router-dom";
function EnterPage() {
    const navigate=useNavigate();
    const handleBeginClick = () => {
        navigate("/register");
    };

    const handleContinueClick = () => {
        navigate("/login");
    };

    return (
        <>
            <div className={"login-form-container"}>
                <div>
                    <button style={{margin: '10px', backgroundColor:'#ff2a1a'}} onClick={handleBeginClick}>Begin</button>
                    <button style={{margin: '10px', backgroundColor:'#5678ff'}} onClick={handleContinueClick}>Continue</button>
                </div>
            </div>
        </>

    );
}

export default EnterPage;
