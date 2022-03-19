import Header from '../../components/HeaderAdmin';
import  '../../styles/pages/menu.scss';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Menu() {
    return (
        <div id="menu-page">
            <Header/>

            <div className="header-menu">
                <div className="center">
                    <div className="container-search">
                        <h2>Cardápio</h2>
                        <form>
                            <input type="text" placeholder='Pesquisar por prato' />
                            <i> <AiOutlineSearch /> </i>
                        </form>
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