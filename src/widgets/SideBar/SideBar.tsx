import React, { useState, type ReactNode } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
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

const SideBar: React.FC<SideBarLayoutProps> = ({ children, header, footer }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            key: RoutePath.main,
            icon: <UserOutlined />,
            label: "Главная",
        },
        {
            key: RoutePath.chat,
            icon: <VideoCameraOutlined />,
            label: "Чат",
        },
        {
            key: RoutePath.profile,
            icon: <UploadOutlined />,
            label: "Профиль",
        },
    ];

    return (
        <div className={s.wrapper}>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <div className="demo-logo-vertical" />
                    <h1 className={s.logo}>MediLink</h1>
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        onClick={({ key }) => navigate(key)}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
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
                        {header}
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
