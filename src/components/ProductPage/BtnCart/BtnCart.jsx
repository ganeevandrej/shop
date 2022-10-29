import style from "./btnCart.module.css";
import {setProductToCart, removeProductFromCart} from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import InputCount from "../../inputCount/InputCount";

const BtnCart = ({count, setCount, setIsProductCart, isProductCart, size, price, id, title, articul, image}) => {
    const dispatch = useDispatch();

    const changeCart = () => {
        if(isProductCart) {
            dispatch(removeProductFromCart(id));
            setIsProductCart(false)
            alert("Продукт удален из корзины");

        } else {
            dispatch(setProductToCart({
                [id]: {
                    title,
                    image,
                    articul,
                    price,
                    size,
                    count
                }
            }));
            setIsProductCart(true);
            alert("Продукт добавлен в корзину");
        }
    }

    return (
        <div className={style.wrapper}>
            <InputCount count={count} setCount={setCount} />
            <button onClick={changeCart}>{isProductCart ? "Удалить из карзины" : "Добавить в корзину"}</button>
        </div>
    );
}

export default BtnCart;