import { FC } from 'react';
import { IoSearch } from 'react-icons/io5';

import styles from './SearchInput.module.css';

type Props = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: FC<Props> = ({ inputValue, setInputValue }) => {
    return (
        <label className={styles.label}>
            <IoSearch />
            <input
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                }
                className={styles.input}
                type="text"
                placeholder="Search for a country.."
            ></input>
        </label>
    );
};

export default SearchInput;
