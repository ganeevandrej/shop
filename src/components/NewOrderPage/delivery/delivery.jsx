import style from "./delivery.module.css";

const Delivery = ({setPrice, setTotalPrice, productsPrice}) => {

    const handleChange = (e) => {
        const value = e.target.value;
        setPrice(value);
        setTotalPrice(Number(productsPrice) + Number(value));
    }

    return (
        <div className={style.wrapper}>
            <h4>СПОСОБ ДОСТАВКИ</h4>
            <div className={style.blockInput}>
                <input type="radio" defaultChecked={true} onChange={handleChange}  name="delivery" value="200"/>
                <label htmlFor="">Доставка курьером в пределах МКАД +200 руб</label>
            </div>
            <div className={style.blockInput}>
                <input type="radio" onChange={handleChange} value="1000" name="delivery"/>
                <label htmlFor="">За МКАД +1000 руб</label>
            </div>
        </div>
    )
}

export default Delivery;