import style from "./payment.module.css";

const Payment = ({setComment, comment}) => {

    const handleChange = (e) => {
        return setComment(e.target.value);
    }

    return (
        <div className={style.wrapper}>
            <div>
                <h4>СПОСОБ ОПЛАТЫ</h4>
                <div className={style.blockInput}>
                    <input readOnly={true} checked type="radio"  name="" id=""/>
                    <label className={style.label} htmlFor="">Наличным курьеру</label>
                </div>
                <div  className={style.blockInput}>
                    <label htmlFor="">комментарии к заказу:</label>
                    <textarea onChange={handleChange} value={comment} name="adress"></textarea>
                </div>
            </div>
            <button>Подтвердить заказ</button>
        </div>
    )
}

export default Payment;