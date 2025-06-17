import React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <TextInput
        style={[{
            color: theme.text,
            backgroundColor: theme.uiBackground,
            padding: 14,
        },style]}
        {...props}
        />
    );
}

export default ThemedTextInput;
