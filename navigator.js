import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ItemList from './itemList';

const AppNavigator = createStackNavigator(
  {
    Home: ItemList,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
