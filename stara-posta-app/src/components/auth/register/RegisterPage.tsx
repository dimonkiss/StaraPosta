import { Form, Input, Button } from 'antd';
import './RegistrationForm.css';
import {IRegister, IRegisterForm} from "../types.ts";
import * as axios from "axios";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate=useNavigate()
    const onFinish = async (values: IRegisterForm) => {
        const model : IRegister = {
            ...values,
        };
        console.log("Register model", model);
        try {
            const user = await axios.post("http://stara.posta.com/api/register", model);
            console.log("User new", user);
            navigate("/");

        }
        catch (ex) {
            console.error('Помилка при реєстрації!');
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="registration-form-container">
        <Form
            name="registration-form"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    className="registration-form"
    >
    <Form.Item
        label="Full Name"
    name="fullName"
    rules={[{ required: true, message: 'Please input your full name!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
    label="Email"
    name="email"
    rules={[{ required: true, message: 'Please input your email!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item
    label="Confirm Password"
    name="confirmPassword"
    dependencies={['password']}
    hasFeedback
    rules={[
            { required: true, message: 'Please confirm your password!' },
    ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match!'));
        },
    }),
]}
>
    <Input.Password />
    </Form.Item>

    <Form.Item>
    <Button type="primary" htmlType="submit">
        Register
        </Button>
        </Form.Item>
        </Form>
        </div>
);
};

export default RegisterPage;
