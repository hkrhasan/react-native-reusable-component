import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  HomeScreen,
  BottomTabExample1,
  BottomTabExample2,
} from '../../../screens';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: style => <Ionicons name={'home'} style={style} />,
    inActiveIcon: style => <Ionicons name={'home-outline'} style={style} />,
    component: HomeScreen,
  },
  {
    route: 'Tabs',
    label: 'Tabs',
    activeIcon: style => <Ionicons name={'information-circle'} style={style} />,
    inActiveIcon: style => (
      <Ionicons name={'information-circle-outline'} style={style} />
    ),
    component: BottomTabExample1,
  },
  {
    route: 'Contact',
    label: 'Contact',
    activeIcon: style => (
      <MaterialCommunityIcons name={'email'} style={style} />
    ),
    inActiveIcon: style => (
      <MaterialCommunityIcons name={'email-outline'} style={style} />
    ),
    component: BottomTabExample2,
  },
  {
    route: 'Profile',
    label: 'Profile',
    activeIcon: style => <FontAwesome name={'user'} style={style} />,
    inActiveIcon: style => <FontAwesome name={'user-o'} style={style} />,
    component: HomeScreen,
  },
];

export {TabArr};
