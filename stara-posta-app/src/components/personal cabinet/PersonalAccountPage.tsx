import React, { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import './PersonalAccount.css'; // Create your stylesheet if needed

const PersonalAccountPage = () => {
    // Example data, replace this with actual user data from your application state or API
    const [userData, setUserData] = useState({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
    });

    const handleChangePassword = () => {
        // Add logic to handle password change
        Modal.info({
            title: 'Change Password',
            content: (
                <div>
                    {/* Add the form or input fields for changing the password */}
                    <p>Form or input fields for changing the password go here.</p>
                </div>
            ),
            onOk() {},
        });
    };

    const handleDeleteProfile = () => {
        // Add logic to handle profile deletion
        Modal.confirm({
            title: 'Delete Profile',
            content: 'Are you sure you want to delete your profile?',
            onOk() {
                // Add logic to delete the profile
                console.log('Profile deleted');
            },
            onCancel() {},
        });
    };

    return (
        <div className="personal-account-container">
            <div className="user-info">
                <p><strong>Full Name:</strong> {userData.fullName}</p>
                <p><strong>Email:</strong> {userData.email}</p>
            </div>

            <Divider />

            <div className="actions">
                <Button type="primary" onClick={handleChangePassword}>
                    Change Password
                </Button>

                <Divider />

                <Button type="danger" onClick={handleDeleteProfile}>
                    Delete Profile
                </Button>
            </div>
        </div>
    );
};

export default PersonalAccountPage;
