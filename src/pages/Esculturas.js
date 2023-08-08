import ProductCard from '../components/ProductCard/ProductCard'
import lista_productos from '../data'

function Esculturas(){
    return (
        <div className="container">
                <div>
                    <h1 className="title has-text-centered mt-6">Mis Esculturas</h1>
                </div>
                <div className="section">
                    <div className="columns">
                        {lista_productos.map((producto)=>{
                                return (
                                    <div className="column is-4" key={producto.id}>
                                        <ProductCard title={producto.titulo} description={producto.descripcion} image={producto.image} precio={producto.precio} id={producto.id}/>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Esculturas;