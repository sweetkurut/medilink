import { AppRouter } from "./providers/router";
import { useLocation } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

import "./styles/index.scss";
import SideBar from "@/widgets/SideBar/SideBar";

function App() {
    const location = useLocation();
    const isAuthPage = location.pathname === routeConfig.login.path || location.pathname === routeConfig.signup.path;

    if (isAuthPage) {
        return <AppRouter />;
    }

    return (
        <SideBar>
            <AppRouter />
        </SideBar>
    );
}

export default App;
