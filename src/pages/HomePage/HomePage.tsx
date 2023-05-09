import { FC, useEffect, useState } from 'react';

import styles from './HomePage.module.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import Filters from '../../components/Filters/Filters';
import CountryList from '../../components/CountryList/CountryList';

const API_URL = 'https://restcountries.com/v2/';
const ALL_COUNTRIES = API_URL + 'all';

const HomePage: FC = () => {
    const [countries, setCountries] = useState<[] | string>([]);
    const [inputValue, setInputValue] = useState('');

    async function fetchCountries(link: string): Promise<[] | string> {
        try {
            const res = await fetch(link);
            const data = await res.json();
            return data;
        } catch (e) {
            return (e as Error).message;
        }
    }
    useEffect(() => {
        if (!inputValue) {
            fetchCountries(ALL_COUNTRIES).then((data) => setCountries(data));
        } else {
            fetchCountries(API_URL + 'name/' + inputValue).then((data) =>
                setCountries(data)
            );
        }
    }, [inputValue]);

    return (
        <main className={styles}>
            <div className="container">
                <div className={styles.controls}>
                    <SearchInput
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    <Filters />
                </div>
                <CountryList countries={countries} />
            </div>
        </main>
    );
};

export default HomePage;
