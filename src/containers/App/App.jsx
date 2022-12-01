import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import SubCategoriesPage from "../SubCategoriesPage/SubCategoriesPage";
import ProductPage from "../ProductPage/ProductPage";
import DifferentPage from "../DifferentPage/DifferentPage";
import SearchPage from "../SearchPage/SearchPage";
import BasketPage from "../BasketPage/BasketPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import LoginPage from "../LoginPage/LoginPage";
import AuthPage from "../AuthPage/AuthPage";
import {useSelector} from "react-redux";
import NewOrderPage from "../NewOrderPage/newOrderPage";

const App = () => {
    const auth = useSelector(state => state.UserReducer);
    console.log(auth);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/"  element={<HomePage />} />
                    <Route path="category/:name" element={<CategoriesPage />} />
                    <Route path="category/:name/:subcategory" element={<SubCategoriesPage />} />
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="page/:name" element={<DifferentPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="cart_items" element={<BasketPage />} />
                    <Route path="client_account/orders"  element={auth.token ? <ProfilePage /> : <LoginPage />} />
                    <Route path="client_account/users/new" element={<AuthPage />} />
                    <Route path="/new_order" element={<NewOrderPage />} />
                </Routes>
                    {/*{routesConfig.map((route, index) => {*/}
                    {/*    return <Route key={index} exact={route.exact}*/}
                    {/*                  path={route.path} element={<route.component/>}/>*/}
                    {/*})}*/}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
