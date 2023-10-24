'use client'
import { useContext, useState } from "react";
import { Context } from '../../context/ContextCarrito'
import './Carrito.css'

export default function Carrito(){
    const {carrito} = useContext(Context)
    const [visible, setVisible] = useState(false)

    return(
        <div>
            <div className="contenedorCarrito">
                <button className="carrito" onClick={ () => {
                    setVisible(!visible)
                }}>Carrito</button>
                <div className="numeroProductos">
                    <p>{carrito.length}</p>
                </div>
            </div>
            
            
            <div className="lista">

                {
                visible ?
                carrito.map(producto => {return <div className="articulo" key={1}>
                        <p>{producto.nombre}</p>
                        <p>{producto.cantidad}</p>
                    </div>
                } )
                : <></>
                }
            </div>
        </div>
    )
}