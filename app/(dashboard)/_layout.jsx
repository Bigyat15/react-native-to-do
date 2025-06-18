import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserOnly from '../../components/auth/UserOnly';
import UserProvider from '../contexts/UserContext';
import TodoProvider from '../contexts/TodoContext';

const DashboardLayout = () => {
    return (
        <UserOnly>
            <TodoProvider>

                <StatusBar />
                <Stack screenOptions={{
                    headerShown: false,
                    animation: "none",
                }} />

            </TodoProvider>
        </UserOnly>
    );
}

export default DashboardLayout;
