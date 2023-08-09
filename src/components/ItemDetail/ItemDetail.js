import { useParams } from "react-router-dom"
import lista_productos from "../../data"
import ItemCount from "../itemCount/itemCount"

function ItemDetail(){

    const {productoId} = useParams() // eslint-disable-next-line
    const producto = lista_productos.find((producto)=>producto.id == productoId)
    const {id,titulo,descripcion,precio,image,stock} = producto;

    return (
        <div className="container mt-6">
            <div className="column is-12 mb-6">
                    <h1 className="title has-text-centered section-title">{titulo}</h1>
            </div>
            <div className="columns is-multiline">
                <div className="column is-12 has-text-centered card-image">
                    <img className="" src={image} alt={descripcion}/>
                </div>
                <div className="column is-4 has-vertically-aligned-content m-auto">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <p className="heading">
                                <strong>ID</strong>
                            </p>
                            <p className="subheading">
                                {id}
                                {}
                            </p>
                        </div>
                        <div className="column">
                            <p className="heading">
                                <strong>Descripcion</strong>
                            </p>
                            <p className="subheading">
                                {descripcion}
                            </p>
                        </div>
                        <div className="column">
                            <p className="heading">
                                <strong>Precio</strong>
                            </p>
                            <p className="subheading">
                                {precio}
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <ItemCount className="button is-info" initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail