import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <div className="DescriptionBlock">
            <article>
                <header>
                    <h2>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <section>
                    <p>
                        Categoria: {category}
                    </p>
                    <p>
                        Descripción: {description}
                    </p>
                    <p>
                        Precio: {price}
                    </p>
                </section>
                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)}/>
                </footer>
            </article>
        </div>
    )
}

export default ItemDetail