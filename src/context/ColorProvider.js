import React, { createContext, useState } from 'react'

export const ColorContext = createContext(null);
const ColorContextProvider = ({children}) => {
    const [overAllColor, setOverAllColor] = useState("#25ca7f");
    return (
        <ColorContext.Provider value={{
           overAllColor,
           setOverAllColor,
        }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContextProvider