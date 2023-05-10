import { FC, useEffect, useState } from 'react';
import Select from 'react-select';

type Props = {
    filterCountries: (region: string | undefined) => void;
};

const Filters: FC<Props> = ({ filterCountries }) => {
    // const [region, setRegion] = useState<string | undefined>('');

    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ];

    // useEffect(() => {
    //     filterCountries(region);
    // }, [region]);

    return (
        <Select
            isSearchable={false}
            isClearable={true}
            placeholder="Filter by Region"
            options={options}
            onChange={(value) => {
                filterCountries(value?.value);
                // setRegion(value?.value)
            }}
        />
    );
};

export default Filters;
