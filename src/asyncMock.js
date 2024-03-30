const products = [
    {id: '1', name: 'Apple Iphone 12', price: 3000000, category: 'celular', img: 'https://http2.mlstatic.com/D_NQ_NP_801859-MCO74732048353_022024-O.webp', stock: 15, description: 'Iphone 12 de 64 Gb de Almacenamiento'},
    {id: '2', name: 'Samsung Galaxy S21 Ultra', price: 4500000, category: 'celular', img: 'https://shopjrtechtt.com/cdn/shop/products/samsung-galaxy-s21-ultra-740496.jpg?v=1663783130', stock: 7, description: 'Iphone 13 de 256 Gb de Almacenamiento'},
    {id: '3', name: 'Google Pixel 2', price: 2700000, category: 'tablet', img: 'https://i.blogs.es/36d8db/pixel-2-black-_-white-front-and-back/1366_2000.jpg', stock: 10, description: 'Google Pixel 2 de 256 Gb de Almacenamiento'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 2000)
    })
}