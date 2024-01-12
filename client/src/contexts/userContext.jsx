import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;