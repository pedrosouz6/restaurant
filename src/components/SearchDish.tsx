import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/components/searchDish.scss'

export default function SearchDish() {
    return (
        <form id='search'>
            <input type="text" placeholder='Pesquisar por prato' />
            <i> <AiOutlineSearch /> </i>
        </form>
    )
}