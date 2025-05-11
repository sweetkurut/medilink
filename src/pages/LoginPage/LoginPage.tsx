import s from "./login.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const nav = useNavigate();
    const handleNavigate = () => {
        nav("/src/pages/MainPage/MainPage.tsx");
    };

    const onFinish = (values: string) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 400 }} onFinish={onFinish} className={s.form}>
                    <Form.Item name="username" rules={[{ required: true, message: "Укажите имя" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Имя" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Укажите пароль" }]}>
                        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Пароль" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запомнить меня</Checkbox>
                            </Form.Item>
                            <a href="#">Забыли пароль</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" onClick={handleNavigate}>
                            Войти
                        </Button>
                        Нету аккаунта? <a href="">Зарегистрироваться</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
