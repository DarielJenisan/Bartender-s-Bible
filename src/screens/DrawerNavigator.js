import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import CategoriesScreen from './CategoriesScreen';
import Sidebar from '../components/Sidebar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
