import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import CategoriesPage from "../CategoriesPage";
import ProductPage from "../ProductPage/ProductPage";
import SearchPage from "../SearchPage";
import { Header } from "../../components/Header";
import { HomePage } from "../HomePage";
import { DifferentPage } from "../DifferentPage";
import Footer from "../../components/Footer/Footer";
import BasketPage from "../BasketPage/BasketPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import LoginPage from "../LoginPage/LoginPage";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/newOrderPage";

export const App = () => {
    const user = useSelector(state => state.UserReducer.user);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="category/:name/:subcategory?" element={<CategoriesPage />} />
                <Route path="product/:id" element={<ProductPage />}/>
                <Route path="page/:name" element={<DifferentPage />}/>
                <Route path="search" element={<SearchPage />}/>
                <Route path="cart_items" element={<BasketPage />}/>
                <Route path="client_account/orders" element={user ? <ProfilePage /> : <LoginPage />}/>
                <Route path="client_account/users/new" element={<AuthPage />}/>
                <Route path="/new_order" element={<NewOrderPage />}/>
            </Routes>
            <Footer />
        </div>
    );
}