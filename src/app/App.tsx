import { Header } from "@/widgets/Header/Header";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Footer } from "@/widgets/Footer/Footer";
import { useLocation } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

function App() {
    const location = useLocation();

    // const isAuthPage = location.pathname === routeConfig.login || location.pathname === routeConfig.signup;
    const isAuthPage = location.pathname === routeConfig.login.path || location.pathname === routeConfig.signup.path;

    return (
        <>
            <div className={"app"}>
                {!isAuthPage && <Header />}
                <main className="content-page">
                    <AppRouter />
                </main>
                {!isAuthPage && <Footer />}
            </div>
        </>
    );
}

export default App;
