import React, { useState, type ReactNode } from "react";
import {
    HomeOutlined,
    IdcardOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import s from "./Sidebar.module.scss";

const { Header, Sider, Content } = Layout;

interface SideBarLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}

const SideBar: React.FC<SideBarLayoutProps> = ({ children, footer }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    const location = useLocation();

    const topMenuItems = [
        {
            key: RoutePath.main,
            icon: <HomeOutlined />,
            label: "Главная",
        },
        {
            key: RoutePath.chat,
            icon: <VideoCameraOutlined />,
            label: "Чат",
        },
        {
            key: RoutePath.system_management,
            icon: <IdcardOutlined />,
            label: "СУЗ",
        },
    ];

    const bottomMenuItems = [
        {
            key: RoutePath.profile,
            icon: <UserOutlined />,
            label: "Профиль",
        },
        {
            key: RoutePath.login,
            icon: <LogoutOutlined />,
            label: "Выйти",
        },
    ];

    const handleMenuClick = ({ key }: { key: string }) => {
        if (key === "logout") {
            console.log("Logging out...");
        } else {
            navigate(key);
        }
    };

    return (
        <div className={s.wrapper}>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <div className={s.menuWrapper}>
                        <Menu
                            theme="light"
                            mode="inline"
                            selectedKeys={[location.pathname]}
                            items={topMenuItems}
                            onClick={handleMenuClick}
                            className={s.menu}
                        />
                        <Menu
                            theme="light"
                            mode="inline"
                            selectedKeys={[location.pathname]}
                            items={bottomMenuItems}
                            onClick={handleMenuClick}
                            className={s.profile_wrap}
                        />
                    </div>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} className={s.header}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                            }}
                        />
                        <h1 className={s.logo}>MediLink</h1>
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                    {footer}
                </Layout>
            </Layout>
        </div>
    );
};

export default SideBar;
