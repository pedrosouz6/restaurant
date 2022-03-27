import { useState, createContext, useContext } from 'react';

const SearchContext = createContext();

export default function SearchProvider({ children }) {

    const [ searchFilter, setSearchFilter ] = useState('');

    return (
        <SearchContext.Provider value={{
            searchFilter,
            setSearchFilter
        }}>

            { children }

        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext);
    const { searchFilter, setSearchFilter } = context;
    return { searchFilter, setSearchFilter };
}