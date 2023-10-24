
import './Productos.css'
import { productos } from '../../public/Productos'
import CardProductos from '../CardProducto/CardProducto'

export default function Productos (){

    return(
        <section className="Productos">
            <h1>Le venimos ofreciendo lo que viene siendo: </h1>
            <div>
            {
                productos.map(producto =>{ return <>
                <CardProductos nombre={producto.nombre} url={producto.url} precio={producto.precio}/>
                </>})
            }    
            </div>
            
        </section>
    )
}