import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser';
import  auth  from "@react-native-firebase/auth"

const Register = () => {
    const colorScheme = useColorScheme()
    const router = useRouter()
    const theme = Colors[colorScheme] ?? Colors.light
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { register } = useUser()
    const handleSubmit = async () => {
        try{
            await register(email,password)
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <ThemedView className="flex-1 justify-center items-center">
                <ThemedText className="text-3xl font-bold">Register</ThemedText>
                <ThemedView className="flex flex-col mt-10 w-full max-w-sm">
                    <ThemedView className="flex flex-row gap-3 items-center justify-start ml-3">
                        <Ionicons name="mail" size={25} color={theme.iconColor} />
                        <ThemedText className="text-xl">Email</ThemedText>
                    </ThemedView>
                    <ThemedTextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter you email' className="m-2 rounded-lg text-xl" />
                    <ThemedView className="flex flex-row gap-3 items-center justify-start ml-3 mt-2">
                        <Ionicons name="eye" size={25} color={theme.iconColor} />
                        <ThemedText className="text-xl">
                            Password
                        </ThemedText>
                    </ThemedView>
                    <ThemedTextInput
                    value={password}
                    onChangeText={setPassword}
                    className="m-2 rounded-lg p-4 text-xl" placeholder="Enter your password" />
                    <ThemedView className="flex flex-row items-center justify-end mr-4 mt-2">
                        <ThemedText>Already Have an account?</ThemedText>
                        <ThemedText
                        onPress={() => router.push("/register")}
                        className="underline"> Login</ThemedText>
                    </ThemedView>
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleSubmit}
                    className="flex items-center justify-center mt-4">
                        <ThemedText className="flex items-center justify-between border border-white bg-slate-800  px-4 py-3 w-40 rounded-full">
                            <ThemedText className="text-center">
                                Register
                            </ThemedText>
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>

            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({})

export default Register;
