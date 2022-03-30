import Search from '../../components/SearchDish';
import  '../../styles/pages/menu.scss';

import { useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { useSearch } from '../../context/search';
import { useDatasDish } from '../../context/dish';

type TypeUserData = {
    id_dish: string;
    name_dish: string;
    ingredients_dish: string;
    price_dish: string;
    note_dish: string;
}
 
export default function Menu() {

    const { setDatasUser } = useAuth();
    const { searchFilter } = useSearch();
    const { datasDish } = useDatasDish();

    const dataFilter = datasDish.filter((item: TypeUserData) => {
        const dishName = item.name_dish;
        
        const dishNameLower = dishName.toLowerCase(); 
        const searchFilterLower = searchFilter.toLowerCase();

        return dishNameLower.includes(searchFilterLower);
    });

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatasUser(datas);

            const tokenUser = JSON.parse(user);
            const token = tokenUser.token;
        }
    }, []);

    return (
        <div id="menu-page">
            <div className="container-search-global">
                <div className="center">
                    <div className="container-search">
                        <h2>Cardápio</h2>
                        <Search />
                    </div>
                </div>
            </div>

            <div className="center">
                <section id='menu'>
                    <table>
                        <thead>
                            <tr>
                                <td className='tb-dish-name'>Nome do prato</td>
                                <td className='tb-ingredients'>Ingredientes</td>
                                <td className='tb-price'>Preço</td>
                                <td className='note'>Observação</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataFilter.map((item: TypeUserData, key: string) => (
                                <tr key={key}>
                                    <td>{ item.name_dish }</td>
                                    <td>{ item.ingredients_dish }</td>
                                    <td>R$ { item.price_dish }</td>
                                    <td>{ item.note_dish === '' ? 'Nenhuma observação' : item.note_dish}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
}