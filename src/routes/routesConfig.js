import HomePage from "../containers/HomePage/HomePage";
import ProfilePage from "../containers/ProfilePage/ProfilePage";
import SearchPage from "../containers/SearchPage/SearchPage";
import BasketPage from "../containers/BasketPage/BasketPage";
import CategoriesPage from "../containers/CategoriesPage/CategoriesPage";
import ProductPage from "../containers/ProductPage/ProductPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import AuthPage from "../containers/AuthPage/AuthPage";
import RecoveryPage from "../containers/RecoveryPage/RecoveryPage";
import SubCategoriesPage from "../containers/SubCategoriesPage/SubCategoriesPage";
import DifferentPage from "../containers/DifferentPage/DifferentPage";


const routesConfig = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/client_account/orders",
        exact: true,
        component: ProfilePage
    },
    {
        path: "/cart_items",
        exact: true,
        component: BasketPage
    },
    {
        path: `/category/:name`,
        exact: true,
        component: CategoriesPage
    },
    {
        path: `/:category/:name`,
        exact: true,
        component: SubCategoriesPage
    },
    {
        path: "/:category/product/:id",
        exact: true,
        component: ProductPage
    },
    {
        path: "/client_account/login",
        exact: true,
        component: LoginPage
    },
    {
        path: "/client_account/contacts/new",
        exact: true,
        component: AuthPage
    },
    {
        path: "/search",
        exact: true,
        component: SearchPage
    },
    {
        path: "/client_account/password/change",
        exact: true,
        component: RecoveryPage
    },
    {
        path: "/different/:name",
        exact: true,
        component: DifferentPage
    }
];

export default routesConfig;