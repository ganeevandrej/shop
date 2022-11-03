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
    }
}
