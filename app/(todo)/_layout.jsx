import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../../constants/Colors';

const Layout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <>
        <StatusBar value="auto" />
        <Stack
        screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
        }}
        />

        </>
    );
}

const styles = StyleSheet.create({})

export default Layout;
