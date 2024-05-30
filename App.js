import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DrinkDetailScreen from './src/screens/DrinkDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bartender\'s Bible' }}
        />
        <Stack.Screen
          name="DrinkDetail"
          component={DrinkDetailScreen}
          options={({ route }) => ({ title: route.params.drink.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
