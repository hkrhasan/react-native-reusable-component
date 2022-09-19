import {Text} from 'react-native';
import React from 'react';

export const Tabs = [
  {
    title: 'Recent',
    icon: {
      name: 'timer',
      type: 'ionicon',
      color: 'white',
    },
    body: style => (
      <Text style={style} h1>
        Recent
      </Text>
    ),
  },
  {
    title: 'favorite',
    icon: {
      name: 'heart',
      type: 'ionicon',
      color: 'white',
    },
    body: style => (
      <Text style={style} h1>
        Favorite
      </Text>
    ),
  },
  {
    title: 'cart',
    icon: {
      name: 'cart',
      type: 'ionicon',
      color: 'white',
    },
    body: style => (
      <Text style={style} h1>
        Cart
      </Text>
    ),
  },
  {
    title: 'Profile',
    icon: {
      name: 'person-circle-outline',
      type: 'ionicon',
      color: 'white',
    },
    body: style => (
      <Text style={style} h1>
        Profile
      </Text>
    ),
  },
];
