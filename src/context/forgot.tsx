import { useState, createContext, useContext, ReactNode } from 'react';

type TypeForgotContext = {
    emailForgot: string;
    setEmailForgot: any;
}

type TypeProviderForgot = {
    children: ReactNode;
}

const ForgotContext = createContext({} as TypeForgotContext );

export default function ProviderForgot({ children } : TypeProviderForgot) {

    const [ emailForgot, setEmailForgot ] = useState('');

    return (
        <ForgotContext.Provider value={{
            emailForgot,
            setEmailForgot,
        }}>

            { children }

        </ForgotContext.Provider>
    )
}

export function useForgot() {
    const context = useContext(ForgotContext);
    const { emailForgot, setEmailForgot } = context;
    return { emailForgot, setEmailForgot };
}