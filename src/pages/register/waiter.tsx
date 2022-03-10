import { Link } from "react-router-dom";

import "../../styles/login.scss";

export default function RegisterCooker () {
    return (
        <div id="page-login">
            <div className="container">
                <div className="choose-login">
                    <Link to="/login/garcom">Garçom</Link>
                    <Link to="/login/cozinheiro">Cozinheiro</Link>
                </div>
                <h2>Criar conta como garçom</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <input type="submit" value="Criar conta" />

                    <span><Link to="/login/cozinheiro">Já tenho conta</Link></span>
                </form> 
            </div>
        </div>
    )
}