import style from "./select.module.css";
import {SWAPI_ROOT} from "../../../constants/api";

const Select = ( {sortProduct} ) => {

    const changeSort = (e) => {
        const url = e.target.value;
        sortProduct(SWAPI_ROOT+url);
    }

    return (
        <div className={style.blockSelect}>
            <span>Сортировать</span>
            <select className={style.select}  onChange={changeSort} name="Сортировка" id="">
                <option value="products/sort/id">По умолчанию</option>
                <option value="products/sort/price">По возрастанию цены</option>
                <option value="products/sort/down/price">По убыванию цены</option>
                <option value="products/sort/title">По алфавиту А-Я</option>
                <option value="products/sort/down/title">По алфавиту Я-А</option>
            </select>
        </div>
    );
}

export default Select;