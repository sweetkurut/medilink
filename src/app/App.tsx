import { Header } from "@/widgets/Header/Header";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Footer } from "@/widgets/Footer/Footer";

function App() {
    return (
        <>
            <div className={"app"}>
                <Header />
                <main className="content-page">
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
