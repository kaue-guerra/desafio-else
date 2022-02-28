import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, CarOutlined, FormOutlined } from '@ant-design/icons';

export function Header() {
    return (
        <Menu mode='horizontal' style={{ textAlign: 'center' }} >
            <Menu.Item key="/">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />
            </Menu.Item >
            <Menu.Item key="/cars">
                <CarOutlined />
                <span>Anúncios</span>
                <Link to="/cars" />
            </Menu.Item>
            <Menu.Item key="/admin">
                <FormOutlined />
                <span>Adminstrar Anúncios</span>
                <Link to="/admin" />
            </Menu.Item>
        </Menu>
    )
}