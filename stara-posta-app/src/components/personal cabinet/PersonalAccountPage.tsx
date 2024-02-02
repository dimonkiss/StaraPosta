import {useEffect, useState} from 'react';
import { Button, Divider, Modal } from 'antd';
import axios from 'axios';
import './PersonalAccount.css';


const PersonalAccountPage = () => {

    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    //const [password, setPassword] = useState(null);
    const getUser = async () => {
        const userId = localStorage.senderUser;

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/${userId}`);
            const userData = response.data.user;
            console.log(userData);
            setName(userData.name);
            setLastName(userData.lastName);
            //setPassword(userData.password);
            setEmail(userData.email);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        getUser();
    }, []);


    const handleChangePassword = () => {
        Modal.info({
            title: 'Change Password',
            content: (
                <div>
                    <p>Form or input fields for changing the password go here.</p>
                </div>
            ),
            onOk() {},
        });
    };

    const handleDeleteProfile = () => {
        Modal.confirm({
            title: 'Delete Profile',
            content: 'Are you sure you want to delete your profile?',
            onOk() {
                console.log('Profile deleted');
            },
            onCancel() {},
        });
    };

    return (
        <div className="personal-account-container">
            <div className="user-info">
                {name && (
                    <>
                        <p><strong>Full Name:</strong> {name +" "+ lastName}</p>
                        <p><strong>Email:</strong> {email}</p>
                    </>
                )}
            </div>

            <Divider/>

            <div className="actions">
                <Button type="primary" onClick={handleChangePassword}>
                    Change Password
                </Button>

                <Divider/>

                <Button type="primary" onClick={handleDeleteProfile}>
                    Delete Profile
                </Button>
            </div>
        </div>
    );
};

export default PersonalAccountPage;
