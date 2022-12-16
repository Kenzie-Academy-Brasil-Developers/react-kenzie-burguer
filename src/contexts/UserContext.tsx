import React, { createContext } from "react";

export interface iProvidersChildrenProps {
    children: React.ReactNode;
}

export const UserContext = createContext({})

export function UserProvider ({ children } : iProvidersChildrenProps) {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}