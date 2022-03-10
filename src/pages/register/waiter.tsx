import { Link } from "react-router-dom";

import "../../styles/login.scss";

export default function FormCooker() {
    return (
        <div id="page-login">
            <div className="container">
                <div className="choose-login">
                    <Link to="/login/garcom">Garçom</Link>
                    <Link to="/login/cozinheiro">Cozinheiro</Link>
                </div>
                <h2>Logar como Garçom</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <input type="submit" value="Entrar" />

                    <span><Link to="/">Esqueceu a senha?</Link></span>
                </form>
            </div>
        </div>
    )
}