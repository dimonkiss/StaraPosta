import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css';
import {useNavigate} from "react-router-dom"; // Створіть файл стилів LoginForm.css

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Тут ви можете додати логіку обробки введених даних, наприклад, надіслати їх на сервер для перевірки
    };
    const navigate = useNavigate();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-form-container">
            <Form
                name="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="login-form"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                            OR
                        <Button type="primary" onClick={() => navigate("/register")}>
                            Register here
                        </Button>
                    </div>
                </Form.Item>

            </Form>
        </div>
    );
};

export default LoginPage;
