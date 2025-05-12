import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <Link to="#">MediLink.kg</Link>
                <nav className={s.nav}>
                    <div>
                        <Link to="#" className={s.nav_link}>
                            Главная
                        </Link>
                    </div>
                    <div>
                        <Link to="/chat" className={s.nav_link}>
                            ИИ чат
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className={s.nav_link}>
                            Суз
                        </Link>
                    </div>
                    <div>
                        <Link to="/login" className={s.nav_link}>
                            Выйти
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
