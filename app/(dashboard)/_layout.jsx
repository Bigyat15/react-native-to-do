import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserOnly from '../../components/auth/UserOnly';
import UserProvider from '../contexts/UserContext';

const DashboardLayout = () => {
    return (
        <UserOnly>
        <StatusBar />
        <Stack screenOptions={{
            headerShown:false,
            animation : "none",
        }}/>
        </UserOnly>
    );
}

export default DashboardLayout;
