import { FC } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import styles from './CountryList.module.css';

type Props = {
    countries: [] | string;
};

const CountryList: FC<Props> = ({ countries }) => {
    return (
        <div className="container">
            <div className={styles.countrylist}>
                {!Array.isArray(countries) ? (
                    <div className={styles.notfound}>Not found</div>
                ) : (
                    countries.map((country: any) => {
                        return (
                            <CountryItem
                                key={country.numericCode}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flag}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default CountryList;
