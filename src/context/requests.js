import { useState, createContext, useEffect, useContext } from 'react';
import Axios from 'axios';

const RequestContext = createContext();

export default function ProviderContext({ children }) {

    const [ requests, setRequests ] = useState([]);
    const [ loopApi, setLoopApi ] = useState(false);

    useEffect(() => {
        const getUser = localStorage.getItem('user');
        
        if(getUser) {
            const user = JSON.parse(getUser);
            const userId = user.user.id;
            Axios.get(`http://localhost:3333/get/request/${userId}`)
            .then(response => setRequests(response.data));
        }
    }, [loopApi]);

    return(
        <RequestContext.Provider value={{
            requests,
            setRequests,
            loopApi,
            setLoopApi
        }}>

            { children }

        </RequestContext.Provider>
    )
} 

export function useRequest(){
    const context = useContext(RequestContext);
    const { requests, setRequests, loopApi, setLoopApi } = context;
    return { requests, setRequests, loopApi, setLoopApi };
}