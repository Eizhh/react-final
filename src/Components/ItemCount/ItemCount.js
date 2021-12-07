import React from 'react'

export const ItemCount = ( {cantidad,modify,max} ) => {

    const handleRestar = () => {
        if (cantidad >0)
        modify(cantidad -1)
    }

    const handleSumar = () => {
        if (cantidad <max)
        modify(cantidad +1)
    }

    return (
        <div>
            <button 
            onClick={handleRestar}
            className="btn btn-danger mx-3">
                -
            </button>

            <span>{cantidad}</span>

            <button 
            onClick={handleSumar}
            className="btn btn-primary mx-3">
                +
            </button>
        </div>
    )
}
