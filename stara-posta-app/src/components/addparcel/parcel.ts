interface Parcel {
    id: number;
    number: string;
    category_id: number;
    description?: string;
    sender_id: number;
    receiver_id: number;
}

export default Parcel;
