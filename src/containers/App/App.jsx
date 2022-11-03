import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './app.module.css';
import HomePage from "../HomePage/HomePage";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import SubCategoriesPage from "../SubCategoriesPage/SubCategoriesPage";
import ProductPage from "../ProductPage/ProductPage";
import DifferentPage from "../DifferentPage/DifferentPage";
import SearchPage from "../SearchPage/SearchPage";
import BasketPage from "../BasketPage/BasketPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header />
                <Routes>
                    <Route path="/"  element={<HomePage />} />
                    <Route path="category/:name" element={<CategoriesPage />} />
                    <Route path="category/:name/:subcategory" element={<SubCategoriesPage />} />
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="page/:name" element={<DifferentPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="cart_items" element={<BasketPage />} />
                    <Route path="client_account/orders" element={<ProfilePage />} />
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
