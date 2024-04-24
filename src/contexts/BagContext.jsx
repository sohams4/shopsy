import React, { createContext, useState } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bag, setBag] = useState([]);

    const addToBag = item => {
        setBag(prev => [...prev, item]);
    };

    return (
        <BagContext.Provider value={{ bag, addToBag }}>
            {children}
        </BagContext.Provider>
    );
};

export default BagContext;