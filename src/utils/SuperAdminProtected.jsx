import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SuperAdminProtected = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('superAdminToken')) {
            navigate('/super-admin/login')
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    );
};

export default SuperAdminProtected;