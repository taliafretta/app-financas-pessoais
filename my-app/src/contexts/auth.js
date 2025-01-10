import React, { createContext, useState } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome: 'Talia'
    })

    const navigation = useNavigation();

    async function signUp(name, email, password) {
        try{
            const response = await api.post('/users', {
                name: name,
                password: password,
                email: email,
            })

            navigation.goBack();
        } catch(err){
            console.log('erro ao cadastrar', err)
        } 

    }

    return(
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;