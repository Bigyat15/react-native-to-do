import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from 'react-native';
import { Colors } from "../constants/Colors";
import { UserProvider } from './contexts/UserContext';
import { useUser } from "../hooks/useUser";
import { Provider } from "react-redux";
import store from "../store";

function TabsLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const { user } = useUser();

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
      <Tabs.Screen name="index" options={{
        title: "Home",
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor} />
        )
      }}
      />
      <Tabs.Screen
        name="(dashboard)"
        options={{
          title: "Dashboard",
          href: user ? "/(dashboard)/Profile" : null, 
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }}
      />
      <Tabs.Screen 
        name="contexts/UserContext"
        options={{ href: null }}
      />
      <Tabs.Screen
      name="contexts/TodoContext"
      options={{href:null}}
      />
      <Tabs.Screen
        name="(todo)"
        options={{
          title: "Create Todo",
          href: user ? "/(todo)/create" : null,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "create" : "create-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }}
      />
      <Tabs.Screen name="(auth)"
      options={{ 
        title: "Profile",
        href: user ? null : "/(auth)/login", 
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? "person" : "person-outline"} size={20} color={focused ? theme.iconColorFocused : theme.iconColor} />
        )
      }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <UserProvider>
      <TabsLayout />
    </UserProvider>
    </Provider>
    
  );
}
