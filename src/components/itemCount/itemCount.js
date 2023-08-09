import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);
    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }

    return (
        <div>
            <div className='is-flex is-justify-content-space-around'>
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div className='box has-text-centered'>
                    <button className='button' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;