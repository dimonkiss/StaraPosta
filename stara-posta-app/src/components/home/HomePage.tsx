import './home.css'
const HomePage =()=> {
    return(
        <>
            <div className="App">
                {/* Верхня половина сторінки */}
                <div className="upper-half">

                    {/* Перший контейнер у верхній половині */}
                    <div className="box">Container 1</div>

                    {/* Другий контейнер у верхній половині */}
                    <div className="box">Container 2</div>
                </div>

                {/* Нижня половина сторінки */}
                <div className="lower-half">
                    <div className="box">Мої посилки</div>
                    <div className="box">Container 4</div>
                    <div className="box">Відділення та поштомати</div>
                    <div className="box">Створити посилку</div>
                </div>
            </div>
        </>
    );
};
export default HomePage;