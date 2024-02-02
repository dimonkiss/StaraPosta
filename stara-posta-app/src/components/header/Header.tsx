import './Header.css';
import {FaHome, FaUser} from 'react-icons/fa'; // Import the home icon from FontAwesome
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
const Header = () => {
    const navigate = useNavigate();
    const [count,setCount] = useState(0);
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');

        if (!isAuthenticated && count==0) {
            setCount(1);
            navigate("/enter");
        }
    }, [navigate]);


    const checkTokenAndRedirect = () => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/account');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="header">
            <div className="icon home" onClick={() => navigate('/home')}>
                <FaHome /> {/* Use the home icon component */}
            </div>
            <div className="icon user" onClick={checkTokenAndRedirect}>
                <FaUser />
            </div>
        </div>
    );
};

export default Header;
