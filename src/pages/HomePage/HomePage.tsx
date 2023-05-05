import { FC } from 'react';

import styles from './HomePage.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';

const HomePage: FC = () => {
    const theme = document.body.getAttribute('data-theme');
    return (
        <main className={theme === 'dark' ? styles.dark : styles.light}>
            <div className="container">
                <div>
                    <SearchInput />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
