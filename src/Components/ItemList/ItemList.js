import Item from "../Item/Item"

const ItemList = ({products}) => {
    if (!products || !Array.isArray(products)) {
        return <div>No hay productos disponibles</div>
    }

    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

// const ItemList = ({products}) => {
//     return (
//         <div>
//             {products.map(prod => <Item key={prod.id} {...prod} />)}
//         </div>
//     )
// }

export default ItemList