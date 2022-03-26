import { useState, createContext, useEffect, useContext } from 'react';
import Axios from 'axios';

const RequestContext = createContext();

export default function ProviderContext({ children }) {

    const [ requests, setRequests ] = useState([]);
    const [ loopApi, setLoopApi ] = useState(false);
    const [ requestFinishid, setRequestFinishid ] = useState([]);
    const [ requestInProgress, setRequestInProgress ] = useState([]);

    useEffect(() => {
        const getUser = localStorage.getItem('user');
        
        if(getUser) {
            const user = JSON.parse(getUser);
            const userId = user.user.id;
            const userType = user.user.type;
            
            if(userType == 2) {
                Axios.get(`http://localhost:3333/get/request/${userId}`)
                .then(response => {
                    const data = response.data;
                    if(data){
                        setRequests(response.data);
                        const finishid = data.filter(item => item.status_request == 3);
                        const inProgress = data.filter(item => item.status_request == 2);
                        setRequestFinishid(finishid)
                        setRequestInProgress(inProgress);
                    }
                });
            }
        }
    }, [loopApi]);

    return(
        <RequestContext.Provider value={{
            requests,
            setRequests,
            loopApi,
            setLoopApi,
            requestFinishid,
            requestInProgress
        }}>

            { children }

        </RequestContext.Provider>
    )
} 

export function useRequest(){
    const context = useContext(RequestContext);
    const { requests, setRequests, loopApi, setLoopApi, requestFinishid, requestInProgress } = context;
    return { requests, setRequests, loopApi, setLoopApi, requestFinishid, requestInProgress };
}