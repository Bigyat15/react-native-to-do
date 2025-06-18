import React, { useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { useUser } from '../../hooks/useUser';
import { useTodo } from '../../hooks/useTodo';
import { TodoContext } from '../contexts/TodoContext';

const Profile = () => {
  const { logout, user } = useUser();
  const { todo, finishTodo, deleteTodo } = useContext(TodoContext)
  return (
    <ThemedView className="flex-1" safe={true}>
      <ScrollView>
        <ThemedView className="flex items-center">
          <ThemedText className="text-xl">Welcome Back, {user.email}</ThemedText>
        </ThemedView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={logout}
        >
          <ThemedView className="flex justify-center items-center mt-4">
            <ThemedText className='px-8 py-2 rounded-full bg-blue-500'>
              <ThemedText>Logout</ThemedText>
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>

        <ThemedView className="flex items-center justify-center mt-3">
          <ThemedText className="text-xl">Your Recent Todo List</ThemedText>
        </ThemedView>

        {/* Header Row */}
        <ThemedView className="flex flex-row mt-5 p-3">
          <ThemedText className="w-12">S.N.</ThemedText>
          <ThemedText className="w-24">Date</ThemedText>
          <ThemedText className="flex-1">Title</ThemedText>
          <ThemedText className="w-20">Actions</ThemedText>
        </ThemedView>

        {todo?.length > 0 ? (
          todo.map((todo, i) => (
            <ThemedView key={todo.id} className="flex flex-row p-3">
              <ThemedText className="w-12">{i + 1}</ThemedText>
              <ThemedText className="w-24">
                {todo.createdAt
                  ? new Date(todo.createdAt).toLocaleDateString()
                  : "N/A"}
              </ThemedText>

              {/* Crossed-out text if completed */}
              <ThemedText
                className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
              </ThemedText>

              <ThemedView className="gap-4">

                {/* Finish button is disabled if completed */}
                {!todo.completed ? (
                  <ThemedText
                    onPress={() => finishTodo(todo.id)}
                    className="text-center rounded-full py-2 bg-blue-500 w-20">
                    Finish
                  </ThemedText>
                ) : (
                  <ThemedText
                    className="text-center rounded-full py-2 bg-gray-400 w-20 cursor-not-allowed opacity-50">
                    Finished
                  </ThemedText>
                )}

                <ThemedText
                onPress={() => deleteTodo(todo.id)}
                className="text-center rounded-full py-2 px-4 bg-red-400">
                  Delete
                </ThemedText>
              </ThemedView>
            </ThemedView>
          ))
        ) : (
          <ThemedText className="text-center mt-4 text-gray-400">
            No todos found.
          </ThemedText>
        )}


      </ScrollView>
    </ThemedView>
  );
};

export default Profile;
