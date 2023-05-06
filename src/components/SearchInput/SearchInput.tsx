import { FC } from 'react';
import { IoSearch } from 'react-icons/io5';

import styles from './SearchInput.module.css';

const SearchInput: FC = () => {
    return (
        <label className={styles.label}>
            <IoSearch />
            <input
                className={styles.input}
                type="text"
                placeholder="Search for a country.."
            ></input>
        </label>
    );
};

export default SearchInput;
