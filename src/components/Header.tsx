import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {

    const [ datas, setDatas ] = useState([]);

    useEffect(() => {
        const datasLocal = localStorage.getItem('user');
        if(datasLocal) {
            return setDatas(JSON.parse(datasLocal));
        }
    }, [])
    console.log(datas)
    return (
        <header id="header">
            <div className="center">
                <div className="container-header">
                    <div className="logo-header">
                        <h1>Restaurante</h1>
                    </div>
                    <nav>
                        <ul>
                            { datas ? "teste" : "ruim" }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}