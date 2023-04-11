export { default } from './CategoriesPage';

export const NameToId = (category, subCategory) => {
    const obj = {
        "Мужчины": {
            "key": 1,
            "Майки": 3,
            "Джинсы": 4,
            "Шорты": 11,
            "Свитшоты": 12,
            "Рубашки": 13
        },
        "Женщины": {
            "key": 2,
            "Майки": 1,
            "Шорты": 2,
            "Свитшоты": 8,
            "Платья": 9,
            "Джинсы": 10
        },
        "Аксессуары": {
            "key": 3,
            "Шляпы": 5,
            "Чехлы": 6,
            "Ремни": 7
        }
    }

    return {
        category: obj[category]["key"],
        subCategory: obj[category][subCategory]
    }
}
export const sortProducts = (select, products) => {
    const newArr = [...products];
    switch (select) {
        case "all":
            return newArr.sort((first, second) => first.id - second.id );
        case "ascending":
            return newArr.sort((first, second) => first.price - second.price );
        case "descending":
            return newArr.sort((first, second) => second.price - first.price );
        case "alphabeticalUp":
            return newArr.sort((first, second) => first.name > second.name ? 1 : -1 );
        case "AlphabeticalDown":
            return newArr.sort((first, second) => second.name > first.name ? 1 : -1 );
        default:
            return newArr;
    }
}