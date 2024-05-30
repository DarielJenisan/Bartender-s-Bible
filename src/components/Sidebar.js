// Sidebar.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.option}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  option: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Sidebar;
