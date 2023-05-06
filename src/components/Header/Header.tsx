import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import cn from 'classnames';

import styles from './Header.module.css';

const Header: FC = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <header
            className={
                theme === 'dark' ? styles.header__dark : styles.header__light
            }
        >
            <div className={cn('container', styles.header)}>
                <Link
                    className={
                        theme === 'dark'
                            ? styles.header__title_dark
                            : styles.header__title
                    }
                    to="/"
                >
                    Where is the world?
                </Link>
                <button
                    onClick={toggleTheme}
                    className={
                        theme === 'dark'
                            ? styles.header__themebutton_dark
                            : styles.header__themebutton_light
                    }
                >
                    {theme === 'dark' ? (
                        <IoMoon color="white" />
                    ) : (
                        <IoMoonOutline />
                    )}
                    <p
                        className={
                            theme === 'dark' ? styles.header__button_dark : ''
                        }
                    >
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </p>
                </button>
            </div>
        </header>
    );
};

export default Header;
