import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage.tsx";
import Header from "./components/header/Header.tsx";
import LoginPage from "./components/login/LoginPage.tsx";
import RegisterPage from "./components/register/RegisterPage.tsx";

const App: React.FC = () => {
    return (
    <>
        <Header/>
        <Routes>
            <Route path="/">
                <Route path={"home"} element={<HomePage/>} />
                <Route path={"login"} element={<LoginPage/>} />
                <Route path={"register"} element={<RegisterPage/>} />
                <Route path={"home"} element={<HomePage/>} />
            </Route>
        </Routes>
    </>
    );
};

export default App;
