import Item from '../Item/Item'
import { getProducts, getProductsByCategory } from '../../data'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

function ItemListContainer(){

    const [lista_productos, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response=> {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="container">
                <div>
                    <h1 className="title has-text-centered mt-6">Esculturas</h1>
                </div>
                <div className="section">
                    <div className="columns">
                        {lista_productos.map((producto)=>{
                                return (
                                    <div className="column" key={producto.id}>
                                        <Item title={producto.titulo} description={producto.descripcion} image={producto.image} precio={producto.precio} id={producto.id}/>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
        </div>
    )
}

export default ItemListContainer;