import { Link } from "react-router-dom";

export default function FormCooker() {
    return (
        <div className="page-login">
            <div className="container">
                <div className="choose-login">
                    <Link to="/login/garcom">Garçom</Link>
                    <Link to="/login/cozinheiro">Cozinheiro</Link>
                </div>
                <h2>Logar como Cozinheiro</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <input type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    )
}