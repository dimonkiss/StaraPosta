import "./MyParcels.css";
import React, { useEffect, useState } from 'react';
import Parcel from "../addparcel/parcel.ts";
const MyParcelsPage: React.FC = () => {
    const [parcels, setParcels] = useState<Parcel[]>([]);

    useEffect(() => {
        const fetchParcels = async () => {
            try {
                // Assuming you have an endpoint for fetching user's parcels
                const response = await fetch('/api/myparcels');
                const data: Parcel[] = await response.json();
                setParcels(data);
            } catch (error) {
                console.error('Error fetching parcels:', error);
            }
        };

        fetchParcels();
    }, []);

    return (
        <div className={"myparcels-container"}>
            <h1>My Parcels</h1>
            <ul>
                {parcels.map(parcel => (
                    <li key={parcel.id}>
                        <div>Number: {parcel.number}</div>
                        <div>Category ID: {parcel.category_id}</div>
                        {parcel.description && <div>Description: {parcel.description}</div>}
                        <div>Sender ID: {parcel.sender_id}</div>
                        <div>Receiver ID: {parcel.receiver_id}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyParcelsPage;
