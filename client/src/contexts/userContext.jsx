import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedAuth = localStorage.getItem('user');
        if (storedAuth) {
          setUser(JSON.parse(storedAuth));
        }
     }, []);
    const login = () => {
        setUser(true);
        localStorage.setItem('user', JSON.stringify(true));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;