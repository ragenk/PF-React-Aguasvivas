import { Link } from 'react-router-dom';

function Item({title, description, image, id}){

    return (        
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img src={image} alt={description} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content has-text-centered">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                    <div className="content has-text-centered">
                        <Link className="button is-info" to={`/esculturas/${id}`}>Ver Mas Detalles</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item