import style from "./newOrderPage.module.css";
import Contacts from "../../components/NewOrderPage/contact/contacts";
import Delivery from "../../components/NewOrderPage/delivery/delivery";
import Payment from "../../components/NewOrderPage/ payment/payment";
import Products from "../../components/NewOrderPage/producrs/products";
import {useSelector} from "react-redux";
import {postApi} from "../../utils/network";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SWAPI_CARTS_ROOT, SWAPI_ORDER_NEW_ROOT} from "../../constants/api";

const NewOrderPage = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [deliveryPrice, setDeliveryPrice] = useState(null);
    const [productsPrice, setProductsPrice] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [products, setProducts] = useState(null);
    const productsCart = useSelector(state => state.CartReducer);
    const user = useSelector(state => state.UserReducer);
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        debugger

        const res = await postApi( SWAPI_ORDER_NEW_ROOT, {
            user_data: name,
            phone_number: phone,
            addres: address,
            comment: comment,
            totalPrice: totalPrice,
            user: user.user.id
        });

        products.map(async ({id, countProduct, price}) => {
             await postApi(SWAPI_CARTS_ROOT, {
                product: Number(id),
                amount: countProduct,
                price: price,
                order: Number(res["id"]),
            });
            console.log("Привет");
        });
        console.log(products);
        navigate("/");
    }

    useEffect(() => {
        const arrProduct = Object.entries(productsCart);

        if (arrProduct.length) {
            const productsArr = arrProduct.map(item => {
                return {
                    id: item[0],
                    img: item[1].image,
                    title: item[1].title,
                    countProduct: item[1].count,
                    price: item[1].price,
                };
            });

            const priceProducts = productsArr.reduce((price, item) => {
                return price + (item.price * item.countProduct);
            },0);

            setProducts(productsArr);
            setProductsPrice(priceProducts);
        }
    }, [productsCart])

    return (
        <div className={style.wrapper}>
            <h2>Оформление заказа</h2>
            <div className={style.blockInfo}>
                <form onSubmit={submitForm} className={style.blockOrder}>
                    <Contacts name={name} setName={setName } address={address}
                              phone={phone} setPhone={setPhone} setAddress={setAddress} />
                    <Delivery setPrice={setDeliveryPrice}
                              productsPrice={productsPrice} setTotalPrice={setTotalPrice}/>
                    <Payment comment={comment} setComment={setComment} />
                </form>
                <div className={style.blockProducts}>
                    <Products deliveryPrice={deliveryPrice} productsPrice={productsPrice}
                              totalPrice={totalPrice} products={products} />
                </div>
            </div>
        </div>
    );
}

export default NewOrderPage;