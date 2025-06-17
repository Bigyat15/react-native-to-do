import { useRouter } from 'expo-router';
import React, { useEffect,useState } from 'react';
import ThemedLoader from '../ThemedLoader';
import { useUser }  from '../../hooks/useUser';

const UserOnly = ({children}) => {
    const {user,authChecked} = useUser();
    const router = useRouter()

    useEffect(() => {
        if(authChecked && user === null){
            router.replace("/login")
        }
    },[user,authChecked])

    if (!authChecked || !user){
        return(
            <ThemedLoader />
        )
    }
    return children
}

export default UserOnly;
