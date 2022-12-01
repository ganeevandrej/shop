import style from "./newOrderPage.module.css";

const NewOrderPage = () => {
    return (
        <div className={style.wrapper}>
            <h1>Оформление заказа</h1>
            <div className={style.blockInfo}>
                <div>
                    <div>
                        <h3>АДРЕС ДОСТАВКИ</h3>
                        <div>
                            <label htmlFor="">контактное лицо (фио):</label>
                            <input name="" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">телефон получателя:</label>
                            <input name="" type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">адрес:</label>
                            <textarea name=""></textarea>
                        </div>
                        <div>
                            <label htmlFor="index">почтовый индекс:</label>
                            <input name="index" type="text"/>
                        </div>
                    </div>
                    <div>
                        <h3>СПОСОБ ДОСТАВКИ</h3>
                        <div>
                            <input type="radio"  name="" id=""/>
                            <label htmlFor="">Доставка курьером в пределах МКАД</label>
                        </div>
                        <div>
                            <input type="radio"  name="" id=""/>
                            <label htmlFor="">За МКАД</label>
                        </div>
                    </div>
                    <div>
                        <h3>СПОСОБ ОПЛАТЫ</h3>
                        <div>
                            <input type="radio" name="" id=""/>
                            <label htmlFor="">Наличным курьеру</label>
                        </div>
                        <div>
                            <label htmlFor="">комментарии к заказу:</label>
                            <textarea name="adress"></textarea>
                        </div>
                    </div>
                    <button>Подтвердить заказ</button>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default NewOrderPage;