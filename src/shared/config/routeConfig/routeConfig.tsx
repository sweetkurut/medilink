import { ChatPage } from "@/pages/ChatPage/ChatPage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { MainPage } from "@/pages/MainPage/MainPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import type { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    LOGIN = "login",
    SIGN_UP = "signup",
    CHAT = "chat",
    PROFILE = "profile",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.SIGN_UP]: "/signup",
    [AppRoutes.CHAT]: "/chat",
    [AppRoutes.PROFILE]: "/profile",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>Not Found</div>,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.signup,
        element: <SignUpPage />,
    },
    [AppRoutes.CHAT]: {
        path: RoutePath.chat,
        element: <ChatPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
};
