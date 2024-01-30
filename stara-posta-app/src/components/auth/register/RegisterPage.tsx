import {Alert, Button, Form, Input} from "antd";
import {IRegister, IRegisterForm} from "../types.ts";
import "./RegistrationForm.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const RegisterPage = () => {

    const navigate = useNavigate();
    const [errorMessage] = useState<string>("");

    //Відправка форми на сервер
    const onFinish = async (values: IRegisterForm) => {
        const model : IRegister = {
            ...values
        };
        console.log("Register model", model);
        try {
            const user = await axios.post("http://127.0.0.1:8000/api/register", model);
            console.log("User new", user);
            navigate("/");

        }
        catch (ex) {
            console.error('Помилка при реєстрації!');
        }
    }


    return (
        <>
            {errorMessage && <Alert message={errorMessage} style={{marginBottom: "20px"}} type="error" />}
            <div className="registration-form-container">
                <Form
                    name="createCustomer"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Name"
                        name="name"
                        htmlFor="name"
                        rules={[
                            {required: true, message: 'Це поле є обов\'язковим!'},
                            {min: 2, message: 'Ім\'я повинна містити мінімум 2 символи!'}
                        ]}
                    >
                        <Input autoComplete="name" id={"name"}/>
                    </Form.Item>

                    <Form.Item
                        label="Lastname"
                        name="lastName"
                        htmlFor="lastName"
                        rules={[
                            {required: true, message: 'Це поле є обов\'язковим!'},
                            {min: 2, message: 'Прізвище повинна містити мінімум 2 символи!'}
                        ]}
                    >
                        <Input id={"lastName"}/>
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        htmlFor="phone"
                        rules={[
                            {required: true, message: 'Це поле є обов\'язковим!'},
                            {min: 11, message: 'Телефон повинна містити мінімум 11 символи!'}
                        ]}
                    >
                        <Input autoComplete="phone" id={"phone"}/>
                    </Form.Item>

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

                    <Form.Item
                        name="Confirm password"
                        label="Повторіть Пароль"
                        htmlFor={"confirm"}
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Будь-ласка підтвердіть пароль!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароль не співпадають!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password id={"confirm"}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Реєструватися
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </>
    );
}
export default RegisterPage;