import Header from '../../components/HeaderAdmin';
import Search from '../../components/SearchDish';

import  '../../styles/Admin/allUsers.scss';

export default function AllUsers() {
    return (
        <section id="all-users">
            <Header/>
            <div className="container-search-global">
                <div className="center">
                    <div className="container-search">
                        <h1>Ver todos usuários</h1>
                        <Search />
                    </div>
                </div>
            </div>
                <div className="container-users">
                    <div className="center">
                        <ul>
                            <li>Pedro Souza | pedrosouza@gmail.com</li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}