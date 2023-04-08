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
