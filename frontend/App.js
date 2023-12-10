import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/components/menu/home/Home';
import { useEffect, useRef, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateGame from './src/components/menu/create/CreateGame';
import JoinGame from './src/components/menu/join/JoinGame';
import useWebSocket from './src/hooks/useWebSocket';

const Stack = createNativeStackNavigator();

const LoginTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const WEBSOCKET_URL = 'ws://127.0.0.1:5000';

export default function App() {

  const [gameId, setGameId] = useState(null);
  const [usingWebsocket, setUsingWebsocket] = useState(false);
  const socket = useWebSocket(WEBSOCKET_URL, usingWebsocket);

  const handleCreateGame = () => {
    setUsingWebsocket(true);
  }

  if (gameId === null) {
    return (
      <NavigationContainer theme={LoginTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateGame">
            {(props) => <CreateGame {...props} onCreate={handleCreateGame}/>}
          </Stack.Screen>
          <Stack.Screen name="JoinGame" component={JoinGame} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
