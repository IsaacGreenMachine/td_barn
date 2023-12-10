import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/components/menu/home/Home';
import { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateGame from './src/components/menu/create/CreateGame';
import JoinGame from './src/components/menu/join/JoinGame';

const Stack = createNativeStackNavigator();

const LoginTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function App() {

  const [gameId, setGameId] = useState(null);

  if (gameId === null) {
    return (
      <NavigationContainer theme={LoginTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateGame" component={CreateGame} />
          <Stack.Screen name="JoinGame" component={JoinGame} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
