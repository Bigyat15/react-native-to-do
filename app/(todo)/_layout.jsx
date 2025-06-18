import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import TodoProvider from '../contexts/TodoContext';

const Layout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <TodoProvider>
        <StatusBar value="auto" />
        <Stack
        screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerShown:false
        }}
        />

        </TodoProvider>
    );
}

export default Layout;
