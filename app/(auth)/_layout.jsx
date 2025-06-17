import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <>
        <StatusBar style='auto'/>
        <Stack
        screenOptions={{ headerShown: false , animation: 'none' }}
        >
        </Stack>
        </>
    );
}


export default AuthLayout;
