import style from "./inputCountCart.module.css";
import plus from "./img/1828921.png";
import minus from "./img/32320.png";
import {useDispatch} from "react-redux";
import {upDateProductCart} from "../../../../store/actions";

const InputCountCart = ( {id, count} ) => {
    const dispatch = useDispatch();

    const increment = () => {
        count++;
        dispatch(upDateProductCart({
            id,
            count
        }))
    }

    const decrement = () => {
        if (count > 1) {
            count--;
            dispatch(upDateProductCart({
                id,
                count
            }))
        }
    }

    return (
        <div className={style.wrapper}>
            <input id={id} type="text" readOnly value={count} />
            <div className={style.count}>
                <div onClick={increment}>
                    <img src={plus} alt="" />
                </div>
                <div onClick={decrement}>
                    <img src={minus} alt="" />
                </div>
            </div>
        </div>
    );
}

export default InputCountCart;