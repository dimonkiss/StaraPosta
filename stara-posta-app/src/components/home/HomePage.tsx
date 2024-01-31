import './home.css'
const HomePage =()=> {
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
                    <div className="lbox1"></div>
                    <div className="lbox2">Container 4</div>
                    <div className="lbox3"></div>
                    <div className="lbox4"></div>
                </div>
            </div>
    );
};
export default HomePage;