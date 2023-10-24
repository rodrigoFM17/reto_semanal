'use client'
import { useContext } from 'react'
import './CardProducto.css'
import { Context } from '@/context/ContextCarrito'


export default function CardProductos({nombre, url, precio}){

    const {carrito, setCarrito} = useContext(Context)

    const agregarProducto = () =>{

        const existente = carrito.find((articulo) => articulo.nombre == nombre)
        
        if(!existente){
            carrito.push({
                nombre,
                precio,
                cantidad: 1
            })
            console.log(carrito) 
            setCarrito([...carrito])
        } else {
            existente.cantidad += 1
        }
        
    }

    return(
        <figure className='card'>
            <img src={url} alt={nombre} />
            <figcaption>
                <p>{nombre}</p>
                <p>$ {precio}.00</p>
                <button onClick={agregarProducto}>Agregar al carrito</button>
            </figcaption>
        </figure>
    )
}