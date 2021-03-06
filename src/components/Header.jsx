function Header() {
    return (
        <header className='header-nav'>
            <nav className='green darken-1'>
                <div className='nav-wrapper'>
                    <a href='/' className='brand-logo'>
                        React Shop
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a
                                href='https://ymakarevich76.github.io/react-shop/'
                                target='_blank' rel="noreferrer"
                            >
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
