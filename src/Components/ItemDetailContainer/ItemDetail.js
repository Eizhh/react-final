import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './Itemdetail.scss'
import {Link } from 'react-router-dom'

export const ItemDetail= ({id, name, price, img, description,stock}) => {

    const [cantidad, setCantidad] = useState (0)
    const {addToCart, isInCart} = useContext(CartContext)

    const handleAgregar = () => {
        const newItem = {
            id,
            name,
            price,
            cantidad

        }
        if (cantidad >0){
        addToCart(newItem)}
    }
   
   return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>

                {isInCart(id)
                    ? <Link to="/cart" className="btn btn-success">Terminar mi compra
                    </Link>
                    :
                    <> 

                    <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>

                    <button 
                    className="btn btn-warning mx-4 my-2" onClick={handleAgregar}>Agregar
                    </button>
                    </>
                }
        </div>
    )
}
