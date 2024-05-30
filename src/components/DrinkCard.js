import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const DrinkCard = ({ drink, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(drink)} style={styles.container}>
      <Image source={{ uri: drink.image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{drink.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%', // Adjusted to fit two items in a row with some margin
    margin: '2.5%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
  },
});

export default DrinkCard;
