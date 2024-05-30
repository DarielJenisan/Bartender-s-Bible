import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Picker } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo vector icons
import DrinkList from '../components/DrinkList';
import drinksData from '../data/drinks';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [filteredDrinks, setFilteredDrinks] = useState(drinksData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterDrinks(query, category);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    filterDrinks(searchQuery, value);
  };

  const filterDrinks = (query, category) => {
    let filtered = drinksData;
    if (query) {
      filtered = filtered.filter((drink) =>
        drink.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (category !== 'All') {
      filtered = filtered.filter((drink) => drink.category === category);
    }
    setFilteredDrinks(filtered);
  };

  const handlePressDrink = (drink) => {
    navigation.navigate('DrinkDetail', { drink });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <MaterialIcons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search drinks..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={handleCategoryChange}>
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Cocktail" value="Cocktail" />
          <Picker.Item label="Beer" value="Beer" />
          <Picker.Item label="Wine" value="Wine" />
          <Picker.Item label="Whiskey" value="Whiskey" />
          <Picker.Item label="Vodka" value="Vodka" />
          <Picker.Item label="Gin" value="Gin" />
          <Picker.Item label="Tequila" value="Tequila" />
          <Picker.Item label="Rum" value="Rum" />
          <Picker.Item label="Brandy" value="Brandy" />
          <Picker.Item label="Liqueur" value="Liqueur" />
          <Picker.Item label="Non-Alcoholic" value="Non-Alcoholic" />
          {/* Add more categories as needed */}
        </Picker>
      </View>
      <DrinkList drinks={filteredDrinks} onPressDrink={handlePressDrink} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  picker: {
    width: 120, // Adjusted width
    height: 40,
    marginLeft: 8,
  },
});

export default HomeScreen;
