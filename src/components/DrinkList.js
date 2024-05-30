import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DrinkCard from './DrinkCard';

const DrinkList = ({ drinks, onPressDrink }) => {
  const renderDrinkItem = ({ item }) => {
    return <DrinkCard drink={item} onPress={onPressDrink} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});

export default DrinkList;
