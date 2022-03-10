import Aside from "../../components/Aside";
import Header from "../../components/Header";

import "../../styles/admin.scss";

export default function Admin () {
    return (
        <div id="page-admin">
            <Header />
            <div className="center">
                <div className="container">
                    <Aside />

                    <section className="section-admin">
                        <div className="section-header">
                            <h1>Cardápio</h1>
                        </div>

                        <div className="add-dish">
                            <form>
                                <input type="text" placeholder="Nome do prato" />
                                <input type="text" placeholder="O que vem no prato?" />
                                <input type="number" placeholder="Preço do prato" />

                                <input type="submit" value="Adicionar" />
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}