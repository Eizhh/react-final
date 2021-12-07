import React, { useContext, useEffect, useState} from "react";
import { useParams } from 'react-router';
import {ItemDetail} from './ItemDetail';
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {loading , setLoading} = useContext(UIContext)
    const {itemId} = useParams()

    useEffect(() => {
        setLoading (true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
        })
    })
        .finally(() => {
            setLoading(false)
       
        })

    }, [itemId, setLoading])

    return (
        <div>
            {
            loading ? <h2>Cargando...</h2>
            : <ItemDetail {...item}/>
            }
         </div>
    )
}
