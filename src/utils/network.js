export const getApi = async (url) => {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            return false;
        }

        return await response.json();
    }catch (error) {
        return false;
    }
}

export const NameToId = (name) => {
    switch (name) {
        case "Мужчины":
            return 1;
        case "Женщины":
            return 2;
        case "Аксессуары":
            return 3;
        default:
            return false;
    }
}

export const NameToIdSub = (name) => {
    switch (name) {
        case "Майки":
            return 1;
        case "Свитшоты":
            return 2;
        case "Джинсы":
            return 3;
        case "Шорты":
            return 4;
        case "Рубашки":
            return 3;
        case "Шляпы":
            return 1;
        case "Чехлы":
            return 2;
        case "Ремни":
            return 3;
        default:
            return false;
    }
}
