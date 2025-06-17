import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen name="(auth)" options={{ title: "Profile", href: null, tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} /> }} />
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor}/>
        )
      }}
      />
      <Tabs.Screen 
      name="(dashboard)"
      options={{
        title:"Dashboard",
        tabBarIcon : ({ focused }) => (
          <Ionicons name={focused ? "person" : "person-outline" } size={20} color={focused ? theme.iconColorFocused : theme.iconColor } />
        )
      }}
      />
      <Tabs.Screen
      name="(todo)"
      options={{
        title:"Create Todo",
        tabBarIcon: ({focused}) => (
          <Ionicons name = {focused ? "create" : "create-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor}/>
        )
      }}
      />
    </Tabs>
  );
}
