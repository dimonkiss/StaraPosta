import './Header.css';
import {FaHome, FaUser} from 'react-icons/fa'; // Import the home icon from FontAwesome
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

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
