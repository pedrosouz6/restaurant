import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/components/searchDish.scss';

import { useSearch } from '../context/search';

export default function SearchDish() {

    const { setSearchFilter } = useSearch();

    return (
        <form id='search'>
            <input type="text" 
            placeholder='Pesquisar por prato' 
            onChange={e => setSearchFilter(e.target.value)}/>
            <i> <AiOutlineSearch /> </i>
        </form>
    )
}