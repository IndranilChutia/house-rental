import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminProtected = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('partnerToken')) {
            navigate('/admin/login')
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    );
};

export default AdminProtected;