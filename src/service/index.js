import { idToName } from "../containers/ProductPage";


export class ApiOnlineStore {
    _baseUrl = "https://aaaa228.pythonanywhere.com/api/";
    _domain = "https://aaaa228.pythonanywhere.com/";
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

    getProduct = async (productId) => {
        const res = await this.getData(`${this._baseUrl}product/${productId}`);
        return this._transformProduct(res);
    }

    getPopularProduct = async () => {
        const res = await this.getData(`${this._baseUrl}products/popular/`);
        return res.map(this._transformPopularProducts);
    }

    search = async (str) => {
        const data = await this.getData(`${this._baseUrl}search/?search=${str}`);
        const res = data.map((item) => {
                const image = item.image.slice(this._domain.length - 1);
                return {
                    ...item,
                    image
                }
            }
        );
        return res.map(this._transformProduct);
    }

    getProductsByCategory = async (category, subcategory) => {
        const data = await this.getData(`${this._baseUrl}products/category/${category}`);
        const res = data.map(this._transformProduct);
        const { subCategoryName } = idToName(category, subcategory);
        return subCategoryName ? res.filter(({ subCategory_name }) => subCategory_name === subCategoryName) : res;
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
            title,
            image: this._urlProductsImg + image,
            price,
            category_id
        }
    }

    _transformProduct = ({ image, title, price, id, articul, subcategoryId, category_id, isBoolean, description }) => {
        const { categoryName, subCategoryName } = idToName(category_id, subcategoryId);
        return {
            id,
            title,
            price,
            articul,
            description,
            categoryName,
            subCategory_name: subCategoryName,
            isAvailability: isBoolean,
            image: this._urlProductsImg + image,
        }
    }
}
