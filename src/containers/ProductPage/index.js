export { default } from "./ProductPage";

export const idToName = (category_id, subCategory_id) => {
    const obj = {
        "1": {
            "key": "Мужчины",
            "3": "Майки",
            "4": "Джинсы",
            "11": "Шорты",
            "12": "Свитшоты",
            "13": "Рубашки"
        },
        "2": {
            "key": "Женщины",
            "1": "Майки",
            "2": "Шорты",
            "8": "Свитшоты",
            "9": "Платья",
            "10": "Джинсы"
        },
        "3": {
            "key": "Аксессуары",
            "5": "Шляпы",
            "6": "Чехлы",
            "7": "Ремни"
        }
    }

    return {
        categoryName: obj[category_id]["key"],
        subCategoryName: obj[category_id][subCategory_id]
    }
}