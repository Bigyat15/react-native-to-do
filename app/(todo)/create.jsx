import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useTodo } from '../../hooks/useTodo';
import { TodoContext } from '../contexts/TodoContext';

const Create = () => {
  const [text,setText] = useState("")
  const {addTodo} = useTodo(TodoContext)

  const handleSybmit = () => {
    if(text.trim()){
      addTodo(text.trim())
      setText('')
    }
  }
  return (
    <ThemedView className="flex-1 justify-center items-center px-4">
      <ThemedView className="flex w-full max-w-sm">
        <ThemedText className="text-center text-lg font-semibold mb-4">Create Your Todo</ThemedText>
        <ThemedTextInput
          value={text}
          onChangeText={setText}
          placeholder="Type in your todo"
          className="rounded-lg py-4 px-3 border border-white mb-4"
        />
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-3"
          activeOpacity={0.8}
          onPress={handleSybmit}
        >
          <ThemedText className="text-white text-center font-medium">Add Todo</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};


export default Create;
