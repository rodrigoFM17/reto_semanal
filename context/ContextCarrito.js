'use client'
import { createContext, useState } from "react";

export const Context = createContext()

export const ContextCarrito = ({children    }) =>{

    const [carrito, setCarrito] = useState([])

    return (
        <Context.Provider value={{carrito, setCarrito}}>
            {children}
        </Context.Provider>
    )
}