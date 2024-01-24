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
                    <div className="lbox">Мої посилки</div>
                    <div className="lbox">Container 4</div>
                    <div className="lbox">Відділення та поштомати</div>
                    <div className="lbox">Створити посилку</div>
                </div>
            </div>
    );
};
export default HomePage;