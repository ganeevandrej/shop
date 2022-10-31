import style from "./btnCart.module.css";
import {setProductToCart, removeProductFromCart} from "../../../../store/actions";
import {useDispatch} from "react-redux";
import InputCount from "../../../inputCount/InputCount";
import {useState} from "react";

const BtnCart = ({setIsProductCart, isProductCart, size, price, id, title, articul, image}) => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);

    const changeCart = () => {
        if(isProductCart) {
            dispatch(removeProductFromCart(id));
            setIsProductCart(false);

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