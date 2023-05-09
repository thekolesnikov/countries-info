import { FC, useState } from 'react';
import Select from 'react-select';

const Filters: FC = () => {
    // const [region, setRegion] = useState('');

    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ];

    return (
        <Select
            isSearchable={false}
            isClearable={true}
            placeholder="Filter by Region"
            options={options}
        />
    );
};

export default Filters;
