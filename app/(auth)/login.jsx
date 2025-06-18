import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../../store/loginSlice';

const Login = () => {
    const colorScheme = useColorScheme()
    const router = useRouter()
    const dispatch = useDispatch()
    const {email,password} = useSelector((state) => state.login)
    const {login} = useUser()
    const theme = Colors[colorScheme] ?? Colors.light

    const handleSubmit = async () => {
        try{
            await login(email,password)
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <ThemedView className="flex-1 justify-center items-center">
                <ThemedText className="text-3xl font-bold">Login</ThemedText>
                <ThemedView className="flex flex-col mt-10 w-full max-w-sm">
                    <ThemedView className="flex flex-row gap-3 items-center justify-start ml-3">
                        <Ionicons name="mail" size={25} color={theme.iconColor} />
                        <ThemedText className="text-xl">Email</ThemedText>
                    </ThemedView>
                    <ThemedTextInput
                    keyboard-type= "email-address"
                    value={email}
                    onChangeText={(text) =>dispatch(setEmail(text))}
                    placeholder='Enter you email' className="m-2 rounded-lg text-xl" />
                    <ThemedView className="flex flex-row gap-3 items-center justify-start ml-3 mt-2">
                        <Ionicons name="eye" size={25} color={theme.iconColor} />
                        <ThemedText className="text-xl">
                            Password
                        </ThemedText>
                    </ThemedView>
                    <ThemedTextInput
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => dispatch(setPassword(text))}
                    className="m-2 rounded-lg p-4 text-xl" placeholder="Enter your password" />
                    <ThemedView className="flex flex-row items-center justify-end mr-4 mt-2">
                        <ThemedText>Don't Have An Account? </ThemedText>
                        <ThemedText
                        onPress={() => router.push("/register")}
                        className="underline"> Register</ThemedText>
                    </ThemedView>
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleSubmit}
                    className="flex items-center justify-center mt-4">
                        <ThemedText className="flex items-center justify-between border border-white bg-slate-800  px-4 py-3 w-40 rounded-full">
                            <ThemedText className="text-center">
                                Login
                            </ThemedText>
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>

            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({})

export default Login;
