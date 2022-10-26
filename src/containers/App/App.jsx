import {BrowserRouter, Route, Routes} from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from './app.module.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header />
                <Routes>
                    {routesConfig.map((route, index) => {
                        return <Route key={index} exact={route.exact}
                                      path={route.path} element={<route.component/>}/>
                    })}
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
