import {Alert, Button, Form, Input} from "antd";
import {ILogin, ILoginResult, IUser} from "../types.ts";
import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {AuthReducerActionType} from "./AuthReducer.ts";

const LoginPage = () => {
    //Хук, який викликає ACTION в глобальному REDUX - він попадає в усіх РЕДЮСЕРАХ
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage] = useState<string>("");
    //Відправка форми на сервер
    const onFinish = async (values: ILogin) => {
        //console.log(values);
        try {
            const resp = await axios.post<ILoginResult>("http://127.0.0.1:8000/api/login", values);
            //console.log(resp);
            const {token} = resp.data;
            //localStorage.token = token;
            console.log("User login data", token);
            const user = jwtDecode(token) as IUser;
            dispatch({
                type: AuthReducerActionType.LOGIN_USER,
                payload: {
                    email: user.email,
                    image: user.image
                } as IUser
            });
            //console.log("User auth", user);
            navigate("/home");

        }
        catch (ex) {
            console.error('Помилка при реєстрації!');
        }
    }

    return (
        <>
            {errorMessage && <Alert message={errorMessage} style={{marginBottom: "20px"}} type="error" />}
            <div className="login-form-container">
                <Form
                    name="createUser"
                    initialValues={{remember: true}}
                    autoComplete="off"
                    onFinish={onFinish}
                >

                    <Form.Item
                        label="Email"
                        name="email"
                        htmlFor="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Формати пошти не правильний!',
                            },
                            {required: true, message: 'Це поле є обов\'язковим!'},
                            {min: 2, message: 'Пошта повинна містити мінімум 2 символи!'}
                        ]}
                    >
                        <Input autoComplete="email" id={"email"}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        htmlFor={"password"}
                        rules={[
                            {required: true, message: 'Вкажіть Ваш пароль!',},
                            {min: 6, message: 'Пароль має мати мінімум 6 символів!',},
                        ]}
                        hasFeedback
                    >
                        <Input.Password id={"password"}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Вхід
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </>
    );
}
export default LoginPage;