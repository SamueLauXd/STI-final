/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserDataContext = createContext()

export function UserDataProvider ({children}) {

    const [userData, setUserData] = useState({
        aireAcondicionado: '1',
        sonido: '1',
        cargador: '1',
        amabilidad: '1',
        velocidad: '1',
        zona: 'norte'
    })

    return (
        <UserDataContext.Provider value={{
            userData,
            setUserData
        }}
        >
            {children}
        </UserDataContext.Provider>
    )
}