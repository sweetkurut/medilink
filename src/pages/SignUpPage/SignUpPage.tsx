import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import s from "./signup.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const SignUpPage = () => {
    const nav = useNavigate();
    const handleNavigate = () => {
        nav("/login");
    };

    const onFinish = (values: string) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Form name="login" initialValues={{ remember: true }} style={{ maxWidth: 400 }} onFinish={onFinish} className={s.form}>
                    <h3 className={s.form_title}>Регистрация</h3>
                    {/* <p className={s.form_title_desc}>Войдите в аккаунт чтобы продолжить</p> */}
                    <Form.Item name="username" rules={[{ required: true, message: "Укажите имя" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Имя" />
                    </Form.Item>
                    <Form.Item name="username" rules={[{ required: true, message: "Укажите фамилию" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Фамилия" />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true, message: "Укажите почту" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Почта" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Укажите пароль" }]}>
                        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Пароль" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Повторите пароль" }]}>
                        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Повторите пароль" />
                    </Form.Item>
                    {/* <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запомнить меня</Checkbox>
                            </Form.Item>
                            <a href="#">Забыли пароль</a>
                        </Flex>
                    </Form.Item> */}

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" onClick={handleNavigate}>
                            Зарегистрироваться
                        </Button>
                        <div className={s.go_to_login}>
                            есть аккаунт? <Link to="/login">Войти</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
