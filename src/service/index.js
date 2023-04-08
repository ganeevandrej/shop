

export class ApiOnlineStore {
    _baseUrl = "https://aaaa228.pythonanywhere.com/api/";
    _urlCategoryImg = "https://static.insales-cdn.com/images/collections";
    _urlProductsImg = "https://static.insales-cdn.com/images/products";

    getData = async (url) => {
        try {
            const res = await fetch(url);
            return res.json();
        } catch (e) {
            return new Error(e);
        }
    }

    getCategory = async () => {
        const category = await this.getData(`${this._baseUrl}category/`);
        const subcategory = await this.getSubCategory();
        return this._transformCategory(category, subcategory);
    };

    getSubCategoryById = async (categoryId) => await this.getData(`${this._baseUrl}category/${categoryId}`);

    getSubCategory = async () => {
        const res = await this.getData(`${this._baseUrl}subcategory/all/`);
        return res.map(this._transformSubcategory);
    };

    getProduct = async (productId) => await this.getData(`${this._baseUrl}category/${productId}`);

    getPopularProduct = async () => {
        const res = await this.getData(`${this._baseUrl}products/popular/`);
        return res.map(this._transformPopularProducts);
    }

    getProductsByCategory = async (categoryId, subcategoryId) => {
        const data = await this.getData(`${this._baseUrl}products/category/${categoryId}`);
        const res = data.map(this._transformProduct);
        return subcategoryId ? res.filter(({ subcategory_id }) => subcategory_id === subcategoryId) : res;
    }

    _transformCategory = (arrayCategory, arraySubcategory) => {
        return arrayCategory.map(( { name, id } ) => {
            const subcategory = arraySubcategory.filter( ({ category_id }) => category_id === id );

            return {
                name,
                id,
                subcategory
            }
        })
    }

    _transformSubcategory = ({ id, name, image, itemId }) => {
        return {
            id,
            name,
            image: this._urlCategoryImg + image,
            category_id: itemId
        }
    }

    _transformPopularProducts = ({ id, title, image, price, category_id }) => {
        return {
            id,
            name: title,
            image: this._urlProductsImg + image,
            price,
            category_id
        }
    }

    _transformProduct = ({ image, title, price, id, subcategoryId }) => {
        return {
            id,
            title,
            image: this._urlProductsImg + image,
            price,
            subcategory_id: subcategoryId
        }
    }
}
