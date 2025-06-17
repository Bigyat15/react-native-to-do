import React from 'react';
import { ScrollView } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const Profile = () => {
  return (
    <ThemedView className="flex-1" safe={true}>
      <ScrollView>
        <ThemedView className="flex items-center">
          <ThemedText className="text-xl">Welcome Back, Bigyat</ThemedText>
        </ThemedView>

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

        {/* Todo Rows */}
        {[...Array(10)].map((_, i) => (
          <ThemedView key={i} className="flex flex-row p-3">
            <ThemedText className="w-12">{i + 1}</ThemedText>
            <ThemedText className="w-24">12/12/2004</ThemedText>
            <ThemedText className="flex-1">
              Wake up in the dwaw awdwadwadaw in the morning
            </ThemedText>
            <ThemedView className="gap-4 ">
              <ThemedText className="text-center rounded-full py-2 bg-blue-500 w-20">
                Edit
              </ThemedText>
              <ThemedText className="text-center rounded-full py-2 px-4 bg-red-400">
                Delete
              </ThemedText>
            </ThemedView>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Profile;
