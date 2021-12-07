import React from 'react'
import { Item } from './Item'
import './Item.scss'

export const ItemList = ( {productos = []} ) => {

    return (
        <div className="container">
            <h2>Productos</h2>
            <hr/>
           <div className="row">
                { productos.map((item)=> <Item {...item} />)}
           </div>
        </div>
    )
}