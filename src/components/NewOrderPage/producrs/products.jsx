import style from "./products.module.css";
import {IMG_PRODUCTS} from "../../../constants/api";

const Products = ({products, deliveryPrice, totalPrice, productsPrice}) => {
    return (
        <>
            <h4>ВАШИ ТОВАРЫ</h4>
            {products && products.map((item) => {
                return (
                    <div className={style.blockProducts} key={item.id}>
                        <div className={style.img}>
                            <img src={IMG_PRODUCTS+item.img} alt=""/>
                        </div>
                        <div className={style.price}>
                            <span>{item.title}</span>
                            <span>{item.countProduct} x {item.price} руб</span>
                        </div>
                    </div>
                )
            })}
            <div className={style}>
                <div className={style.delivery}>
                    <span>Доставка</span>
                    <span>{ deliveryPrice || 0 } руб</span>
                </div>
                <div className={style.priceTotal}>
                    <span>Итого</span>
                    <span>{ deliveryPrice ? totalPrice : productsPrice } руб</span>
                </div>
            </div>
        </>
    )
}

export default Products;