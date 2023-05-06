import { FC } from 'react';

import styles from './HomePage.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import Filters from '../../components/Filters/Filters';

const HomePage: FC = () => {
    return (
        <main className={styles}>
            <div className="container">
                <div className={styles.controls}>
                    <SearchInput />
                    <Filters />
                </div>
            </div>
        </main>
    );
};

export default HomePage;
