import './home.css'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const HomePage =()=> {
    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');

        if (!isAuthenticated) {
            navigate("/enter");
        }
    },[navigate]);

    return(
            <div className="HomePage">
                {/* Верхня половина сторінки */}
                <div className="upper-half">

                    {/* Перший контейнер у верхній половині */}
                    <div className="box">Container 1</div>

                    {/* Другий контейнер у верхній половині */}
                    <div className="box">Container 2</div>
                </div>

                {/* Нижня половина сторінки */}
                <div className="lower-half">
                    <div className="lbox1" onClick={()=>navigate("/myparcels")}></div>
                    <div className="lbox2">Container 4</div>
                    <div className="lbox3" onClick={()=>navigate("")}></div>
                    <div className="lbox4" onClick={()=>navigate("/addparcel")}></div>
                </div>
            </div>
    );
};
export default HomePage;