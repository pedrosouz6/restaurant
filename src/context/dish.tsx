import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import Axios from 'axios';

type TypeDatasDishContext = {
    datasDish: any;
    setDatasDish: any;
    callApi: boolean;
    setCallApi: any;
}

type TypeProviderDatasDish = {
    children: ReactNode;
}

const DatasDishContext = createContext({} as TypeDatasDishContext );

export default function ProviderDatasDish({ children }: TypeProviderDatasDish) {

    const [ datasDish, setDatasDish ] = useState([]);
    const [ callApi, setCallApi ] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3333/get/dish')
        .then(response => {
            if(response.data) {
                setDatasDish(response.data);
            }
        })
    }, [callApi]);

    return (
        <DatasDishContext.Provider value={{
            datasDish,
            setDatasDish,
            callApi,
            setCallApi,
        }}>

            { children }

        </DatasDishContext.Provider>
    )
}

export function useDatasDish() {
    const context = useContext(DatasDishContext);
    const { datasDish, setDatasDish, callApi, setCallApi } = context;
    return { datasDish, setDatasDish, callApi, setCallApi };
}