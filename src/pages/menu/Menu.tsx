import Search from '../../components/SearchDish';
import  '../../styles/pages/menu.scss';
import { useEffect } from 'react';
import { AuthCooker } from '../../context/auth';
 
export default function Menu() {

    const { setDatas, datas } = AuthCooker();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            const userd = JSON.parse(user);
            const datas = userd.user;
            setDatas(datas);

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
                            <tr>
                                <td>Baiao de dois</td>
                                <td>Arroz, feijão, carne seca, vinagrete</td>
                                <td>R$ 45</td>
                            </tr>
                            <tr>
                                <td>Baiao de dois</td>
                                <td>Arroz, feijão, carne seca, vinagrete</td>
                                <td>R$ 45</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Baiao de dois</td>
                                <td>Arroz, feijão, carne seca, vinagrete</td>
                                <td>R$ 45</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
}