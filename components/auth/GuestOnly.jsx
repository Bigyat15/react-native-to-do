import {React,useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import ThemedView from '../ThemedView';
import ThemedLoader from '../ThemedLoader';
import { useUser } from "../../hooks/useUser"
import { useRouter } from 'expo-router';


const GuestOnly = ({children}) => {
    const {user,authChecked} = useUser();
    const router = useRouter()
    useEffect(() => {
        if(user && authChecked !== null){
            router.push("/(dashboard)/Profile")
        }
    },[user,authChecked])

    if(!authChecked || user){
        return(
            <ThemedView className="flex-1 justify-center items-center">
                    <ThemedLoader />
            </ThemedView>
        )
    }
    return children
}

export default GuestOnly;
