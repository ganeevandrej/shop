import style from "./inputCount.module.css";
import plus from "./img/1828921.png";
import minus from "./img/32320.png";

const InputCount = ( {count, setCount} ) => {

    const increment = () => {
        setCount(++count);
    }
    const decriment = () => {
        setCount(--count);
    }
    return (
        <div className={style.wrapper}>
            <input type="text" readOnly value={count} />
            <div className={style.count}>
                <div onClick={increment}>
                    <img src={plus} alt="" />
                </div>
                <div onClick={decriment}>
                    <img src={minus} alt="" />
                </div>
            </div>
        </div>
    );
}

export default InputCount;