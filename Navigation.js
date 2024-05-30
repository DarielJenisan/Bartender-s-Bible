import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipeDetails from './src/screens/RecipeDetails';
import FavoritesScreen from './src/screens/DrinkDetailScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bartender\'s Bible' }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorites' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Sidebar = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Category')}>
          <Text style={styles.optionText}>Category</Text>
        </TouchableOpacity>
        {/* Add more options as needed */}
      </View>
    );
  };
  

export default Navigation;
