import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import GuestOnly from '../../components/auth/GuestOnly';

const AuthLayout = () => {
    return (
        <GuestOnly>
        <StatusBar style='auto'/>
        <Stack
        screenOptions={{ headerShown: false , animation: 'none' }}
        >
        </Stack>
        </GuestOnly>
    );
}


export default AuthLayout;
