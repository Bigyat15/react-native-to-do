import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import ThemedView from './ThemedView';
import { ActivityIndicator } from 'react-native';

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <ThemedView className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color={theme.color} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({})

export default ThemedLoader;
