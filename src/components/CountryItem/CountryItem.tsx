import { FC } from 'react';
import styles from './CountryItem.module.css';

type Props = {
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
};

const CountryItem: FC<Props> = ({
    name,
    population,
    region,
    capital,
    flag,
}) => {
    return (
        <div className={styles.country}>
            <img src={flag} alt="flag" />
            <div className={styles.country__info}>
                <h2 className={styles.country__name}>{name}</h2>
                <p>
                    <span>Population: </span>
                    {population}
                </p>
                <p>
                    <span>Region: </span>
                    {region}
                </p>
                <p>
                    <span>Capital: </span>
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default CountryItem;
