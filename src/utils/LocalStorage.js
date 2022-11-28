export const getLocalStorage = (key) => {
    const data = sessionStorage.getItem(key);

    if(data !== null) {
        return JSON.parse(data);
    }

    return {};
}

export const setLocalStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
}