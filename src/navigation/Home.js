import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {HomeScreen, ButtonScreen} from '../screens';
import BottomTabNavigator from './BottomNav';

const Stack = createStackNavigator();

const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'HomeBottomTab'} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
