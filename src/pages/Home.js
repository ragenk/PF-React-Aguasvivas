import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function Home(){
    return (
        <div className="container">                
                <div>
                    <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
                </div>
        </div>
    )
}

export default Home;