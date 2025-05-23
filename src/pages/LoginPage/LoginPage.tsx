import s from "./login.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const nav = useNavigate();
    const handleNavigate = () => {
        nav("/");
    };

    const onFinish = (values: string) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 400 }} onFinish={onFinish} className={s.form}>
                    <h3 className={s.form_title}>Добро пожаловать!</h3>
                    <p className={s.form_title_desc}>Войдите в аккаунт чтобы продолжить</p>
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
                        <Button block type="primary" htmlType="submit" onClick={handleNavigate} className={s.form_btn}>
                            Войти
                        </Button>
                        Нету аккаунта? <Link to="/signup">Зарегистрироваться</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
