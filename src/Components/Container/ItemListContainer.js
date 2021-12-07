import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { ItemList } from "./ItemList";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = ({}) => {

    const [items, setItems] = useState([])
    const {loading , setLoading} = useContext(UIContext)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading (true)

        const db =getFirestore()
        const productos = db.collection('productos')

        if (categoryId) {

            const filtrado = productos.where('category', '==',categoryId)

            filtrado.get()

            .then((response)  => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
   
                setItems(newItems)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        } else {

        productos.get()
        .then((response)  => {
             const newItems = response.docs.map((doc) => {
                 return {id: doc.id, ...doc.data()}
             })

             setItems(newItems)
         })
         .catch(err => console.log(err))
         .finally(() => {
             setLoading(false)
         })
        }

    }, [categoryId, setLoading])

    return (
    <section className="container my-5">
           {
          loading 
          ? <h2>Cargando...</h2> 
          : <ItemList productos={items}/>
          }
    </section>
    )
}