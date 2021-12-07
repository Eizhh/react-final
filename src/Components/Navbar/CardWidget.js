import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ImgCarrito from "./carrito-de-compras.jpg";

export const CardWidget = () => {

    const {calcularCantidad} = useContext (CartContext)

    return (
        <div style={{
          display: calcularCantidad() === 0 ? "none" : 'block'
        }}>
          <img src= {ImgCarrito} className="imgCarrito"alt="img carrito de compras" height="45" width="40"/>
          <span>{calcularCantidad()}</span>
        </div>
    )
}


