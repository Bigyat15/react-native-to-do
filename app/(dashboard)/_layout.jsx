import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DashboardLayout = () => {
    return (
        <>
        <StatusBar />
        <Stack screenOptions={{
            headerShown:false,
            animation : "none",
        }}/>
        </>
    );
}

export default DashboardLayout;
