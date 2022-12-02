import style from "./contacts.module.css";

const Contacts = (props) => {

    const handleChange = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case "name":
                return props.setName(value);
            case "phone":
                return props.setPhone(value);
            case "address":
                return props.setAddress(value);
            default:
                return false
        }
    }

    return (
        <div className={style}>
            <h4>АДРЕС ДОСТАВКИ</h4>
            <div className={style.blockInput}>
                <label htmlFor="">контактное лицо (фио):</label>
                <input onChange={handleChange} value={props.name} name="name" type="text"/>
            </div>
            <div className={style.blockInput}>
                <label htmlFor="">телефон получателя:</label>
                <input onChange={handleChange} value={props.phone} name="phone" type="text"/>
            </div>
            <div className={style.blockInput}>
                <label htmlFor="">адрес:</label>
                <textarea onChange={handleChange} value={props.address} name="address"></textarea>
            </div>
        </div>
    )
}

export default Contacts;