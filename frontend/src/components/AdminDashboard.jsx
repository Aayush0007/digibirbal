import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/contact');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Contact Submissions</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-item">
                        <h2>{contact.name}</h2>
                        <p>Email: {contact.email}</p>
                        <p>Message: {contact.message}</p>
                        <p>Submitted at: {new Date(contact.created_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
