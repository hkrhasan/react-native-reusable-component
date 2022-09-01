import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabArr} from '../utils/componentObjects/BottomNav/constants';
import {BottomNav} from '../components';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <BottomNav
    headerShown={false}
    TabArr={TabArr}
    showLabel={true}
    // tabBtnDirection="row"
  />
);

export default BottomNavigation;
