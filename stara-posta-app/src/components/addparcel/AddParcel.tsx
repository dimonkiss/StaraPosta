import{ useState } from 'react';
import { Form, Input, Button } from 'antd';
import Parcel from "./parcel.ts";
import "./pageparcel.css";
const AddParcel = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values : Parcel) => {
        setLoading(true);
        try {
            // Make API request to add parcel
            const response = await fetch('/api/parcels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const data = await response.json();
            console.log('Parcel added:', data);
            // Reset form after successful submission
            form.resetFields();
        } catch (error) {
            console.error('Error adding parcel:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={"parcel-container"}>
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
                label="Number"
                name="number"
                rules={[{ required: true, message: 'Please enter the parcel number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Category ID"
                name="category_id"
                rules={[{ required: true, message: 'Please enter the category ID!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                label="Sender ID"
                name="sender_id"
                rules={[{ required: true, message: 'Please enter the sender ID!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                label="Receiver ID"
                name="receiver_id"
                rules={[{ required: true, message: 'Please enter the receiver ID!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Add Parcel
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default AddParcel;
