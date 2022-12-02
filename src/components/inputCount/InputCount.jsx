import style from "./inputCount.module.css";
import plus from "./img/1828921.png";
import minus from "./img/32320.png";

const InputCount = ( {id, count, setCount} ) => {

    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        if(count > 1) {
            setCount(--count);
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

export default InputCount;