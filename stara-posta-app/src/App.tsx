import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"; // Імпортуємо Navigate

// Імпортуємо компоненти
import HomePage from "./components/home/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import LoginPage from "./components/auth/login/LoginPage.tsx";
import RegisterPage from "./components/auth/register/RegisterPage.tsx";
import PersonalAccountPage from "./components/personal cabinet/PersonalAccountPage.tsx";
import AddParcel from "./components/addparcel/AddParcel.tsx";
import MyParcelsPage from "./components/myparcels/MyParcelsPage.tsx";
import EnterPage from "./EnterPage.tsx";

const App: React.FC = () => {
    // Якщо LocalStorage не порожній, відображаємо звичайний контент
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/">
                    <Route path={"home"} element={<HomePage/>} />
                    <Route path={"login"} element={<LoginPage/>} />
                    <Route path={"register"} element={<RegisterPage/>} />
                    <Route path={"home"} element={<HomePage/>} />
                    <Route path={"account"} element={<PersonalAccountPage/>}/>
                    <Route path={"addparcel"} element={<AddParcel/>}/>
                    <Route path={"myparcels"} element={<MyParcelsPage/>}/>
                    <Route path={"enter"} element={<EnterPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
