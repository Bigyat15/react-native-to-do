import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import "../global.css"
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import { useRouter } from 'expo-router';
import { useUser } from '../hooks/useUser';

const Index = () => {
    const router = useRouter()
    const { user } = useUser()
    const handleSubmit = () => {
        console.log(
            "Clicked"
        );
        if(user){
            router.push("/(dashboard)/Profile")
        }else{
            router.push("/(auth)/login")
        }
    }
    return (
        <>
            <ThemedView className="flex-1 items-center justify-center">
                <ThemedText className=" font-bold text-3xl">Welcome to Todo App</ThemedText>
                <TouchableOpacity
                    onPress={handleSubmit}
                    activeOpacity={0.7}
                    className="mt-4 border border-white p-4 py-3 px-8 rounded-full bg-gray-400"
                >
                    <ThemedText>Get Started</ThemedText>
                </TouchableOpacity>
            </ThemedView>
        </>
    );
}


export default Index;
