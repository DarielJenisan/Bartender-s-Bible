import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DrinkDetailScreen = ({ route }) => {
  const { drink } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: drink.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.detail}>{drink.name}</Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.detail}>{drink.description}</Text>
        <Text style={styles.label}>Ingredients:</Text>
        <Text style={styles.detail}>{drink.ingredients}</Text>
        <Text style={styles.label}>Instructions:</Text>
        <Text style={styles.detail}>{drink.instructions}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  detail: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default DrinkDetailScreen;
