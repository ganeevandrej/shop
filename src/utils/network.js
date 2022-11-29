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

export const postApi = async (url, obj) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(obj)
        });

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

export const NameToIdSub = (category, subCategory) => {
    switch (category) {
        case "Мужчины":
            switch (subCategory) {
                case "Майки":
                    return 3;
                case "Джинсы":
                    return 4;
                case "Шорты":
                    return 11;
                case "Свитшоты":
                    return 12;
                case "Рубашки":
                    return 13;
                default:
                    return false;
            }
        case "Женщины":
            switch (subCategory) {
                case "Майки":
                    return 1;
                case "Джинсы":
                    return 10;
                case "Шорты":
                    return 2;
                case "Свитшоты":
                    return 8;
                case "Платья":
                    return 9;
                default:
                    return false;
            }
        case "Аксессуары":
            switch (subCategory) {
                case "Шляпы":
                    return 5;
                case "Ремни":
                    return 7;
                case "Чехлы":
                    return 6;
                default:
                    return false;
            }
        default:
            return false;
    }
}
