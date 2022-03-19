import '../../styles/Admin/add-dish.scss';
import { FaTrash } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { IoMdSettings } from 'react-icons/io';

export default function AddDish() {
    return (
        <section id='add-dish'>
                <div className="container-form">
                    <div className="headers-admin-pages">
                        <div className='center'>
                            <h2>Adicionar prato</h2>
                        </div>
                    </div>
                    <div className='center'>
                        <div className="form-dish">
                            <form>
                                <input id='name-dish' type='text' placeholder='Nome do prato' />
                                <textarea id='ingredients' placeholder='Ingredientes' />
                                <input id='price-dish' type='number' placeholder='Preço' />
                                <textarea id='note' placeholder='Observação(opcional)' />
                                <input type="submit" value="Adicionar" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <div className='container-dishes'>
                        <table>
                            <thead>
                                <tr>
                                    <td className='tb-dish-name'>Nome do prato</td>
                                    <td className='tb-ingredients'>Ingredientes</td>
                                    <td className='tb-price'>Preço</td>
                                    <td className='tb-actions'>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Baiao de dois</td>
                                    <td>Arroz, feijão, carne seca, vinagrete</td>
                                    <td>R$ 45</td>
                                    <td className='tb-act'><i><FaTrash /></i> <i><GrUpdate /></i> <i><IoMdSettings /></i></td>
                                </tr>
                                <tr>
                                    <td>Baiao de dois</td>
                                    <td>Arroz, feijão, carne seca, vinagrete</td>
                                    <td>R$ 45</td>
                                    <td className='tb-act'><i><FaTrash /></i> <i><GrUpdate /></i> <i><IoMdSettings /></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </section>
    )
}