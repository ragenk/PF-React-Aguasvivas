const lista_productos = [
    {
        "id": 1,
        "titulo": "Heart Replica",
        "precio": 200,
        "descripcion": "Corazon sangrando.",
        "category": "Esculturas",
        "image": "https://i.imgur.com/y9fnA7e.jpg",
        "stock": 2
    },
    {
        "id": 2,
        "titulo": "The Mask",
        "precio": 250,
        "descripcion": "Replica de La Mascara.",
        "category": "Esculturas",
        "image": "https://i.imgur.com/g6x0ctq.jpg",
        "stock": 3
    },
    {
        "id": 3,
        "titulo": "Mono NFT",
        "precio": 1500,
        "descripcion": "Escultura en tamaño real.",
        "category": "Esculturas",
        "image": "https://i.imgur.com/ZM1Kz0a.jpg",
        "stock": 2
    },
    {
        "id": 4,
        "titulo": "Rey Mago",
        "precio": 1000,
        "descripcion": "Los 3 Reyes Magos.",
        "category": "Esculturas",
        "image": "https://i.imgur.com/Vqj3IR7.jpg",
        "stock": 3
    },
    {
        "id": 5,
        "titulo": "Minerva Mirabal",
        "precio": 100,
        "descripcion": "Proyecto Mirabal.",
        "category": "Esculturas",
        "image": "https://i.imgur.com/s4dXk7w.jpg",
        "stock": 3
    },
    {
        "id": 6,
        "titulo": "Skully",
        "precio": 300,
        "descripcion": "Miedo a la oscuridad.",
        "category": "Pinturas",
        "image": "https://i.imgur.com/lgxmR5D.jpg",
        "stock": 2
    },
    {
        "id": 7,
        "titulo": "Luna",
        "precio": 450,
        "descripcion": "Luna's Ascension.",
        "category": "Pinturas",
        "image": "https://i.imgur.com/y1GrE5z.jpg",
        "stock": 3
    },
    {
        "id": 8,
        "titulo": "Donald",
        "precio": 450,
        "descripcion": "Miedo a la oscuridad.",
        "category": "Pinturas",
        "image": "https://i.imgur.com/CNHPhY3.jpg",
        "stock": 3
    }
]

export default lista_productos;

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(lista_productos);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find(prod => prod.id === productId));
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })

};