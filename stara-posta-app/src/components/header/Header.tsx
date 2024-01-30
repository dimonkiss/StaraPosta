import  './Header.css';
import {useNavigate} from "react-router-dom";
const Header = ()=> {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="icon bell">🔔</div>
            <div className="icon user" onClick={() => navigate("/login")}>👤</div>
        </div>
    );

};
export default Header;