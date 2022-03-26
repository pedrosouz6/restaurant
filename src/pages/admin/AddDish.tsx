import { FaTrash } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { IoMdSettings } from 'react-icons/io';

import { useState, FormEvent } from 'react';
import { useDatasDish } from '../../context/dish';
import Axios from 'axios';

import Header from '../../components/HeaderAdmin';

import '../../styles/Admin/addDish.scss';

type TypeUserData = {
    id_dish: string;
    name_dish: string;
    ingredients_dish: string;
    price_dish: string;
    note_dish: string;
}

export default function AddDish() {

    const { datasDish, setCallApi, callApi } = useDatasDish();

    const [ nameDish, setNameDish ] = useState('');
    const [ ingredients, setIngredients ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ note, setNote ] = useState('');
    const [ message, setMessage ] = useState('');

    const sendAddDish = (e: FormEvent) => {
        e.preventDefault();
        const validate = nameDish.trim() === '' || ingredients.trim() === '' || price.trim() === '';

        if(validate) {
            return console.log('campo vazio(add dish)');
        }

        Axios.post('http://localhost:3333/add/dish', {
            nameDish,
            ingredients,
            price,
            note
        })
        .then(response => {
            if(response.data.message) {
                setCallApi(!callApi);
                return setMessage(response.data.message);
            }

            return console.log('erro ao cadastrar um prato');
        });
    }

    function deleteDish(id: string) {
        Axios.delete(`http://localhost:3333/delete/dish/${id}`);
        setCallApi(!callApi);
    }

    return (
        <section id='add-dish'>
            <Header />
                <div className="container-form">
                    <div className="headers-admin-pages">
                        <div className='center'>
                            <h2>Adicionar prato</h2>
                        </div>
                    </div>
                    <div className='center'>
                        <div className="form-dish">
                            <form onSubmit={sendAddDish}>

                                <input id='name-dish' type='text' 
                                placeholder='Nome do prato' 
                                value={nameDish}
                                onChange={e => setNameDish(e.target.value)} />

                                <textarea id='ingredients' 
                                placeholder='Ingredientes' 
                                value={ingredients}
                                onChange={e => setIngredients(e.target.value)} />

                                <input id='price-dish' type='number' 
                                placeholder='Preço' 
                                value={price}
                                onChange={e => setPrice(e.target.value)} />

                                <textarea id='note' placeholder='Observação(opcional)'
                                value={note}
                                onChange={e => setNote(e.target.value)} />

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
                                {datasDish.map((item: TypeUserData, key: string) => (
                                    <tr key={key}>
                                        <td>{ item.name_dish }</td>
                                        <td>{ item.ingredients_dish }</td>
                                        <td>R$ { item.price_dish }</td>
                                        <td className='tb-act'>
                                            <i onClick={() => deleteDish(item.id_dish)}> <FaTrash /> </i> 
                                            <i><GrUpdate /></i>
                                            <i><IoMdSettings />
                                            </i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </section>
    )
}