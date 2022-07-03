import logo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img className='nav-logo' src={logo} alt="logo"/>
            <h2 className='nav-appname'>airbnb</h2>
        </nav>
    );
};