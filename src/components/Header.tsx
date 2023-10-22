import '../assets/css/headers.css';
import HeaderInterface from './interface/Header.interface';

const Header = (prop: HeaderInterface) => {
    return (
        <header className="header-default">
            <h1>Welcome Back {prop.name}!</h1>
            <p>Below are the tasks you've added so far</p>
        </header>
    )
};

export default Header;