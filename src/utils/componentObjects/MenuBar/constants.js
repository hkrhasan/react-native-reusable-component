export const imgUri = 'https://reactjs.org/logo-og.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import colors from '../../../style/colors';
import {
  HomeScreen,
  EndIconScreen,
  SubMenuFirstScreen,
  SubMenuSecondScreen,
  BottomTabExample1,
  BottomTabExample2,
  ButtonScreen,
  StartIconScreen,
} from '../../../screens';

export const menuBars = [
  {
    label: 'Home',
    route: 'Home',
  },
  {
    label: 'Buttons',
    route: 'Buttons',
  },
  {
    label: 'Inputs',
    route: 'Inputs',
  },
  {
    label: 'StartIcon',
    route: 'StartIcon',
    startIcon: style => <AntDesign name={'user'} style={style} />,
  },
  {
    label: 'EndIcon',
    route: 'EndIcon',
    endIcon: style => <Feather name={'send'} style={style} />,
    // endIconFullRight: style => <Feather name={'send'} style={style} />,
  },
  {
    label: 'DropDown',
    childs: [
      {
        label: 'SubMenuFirst',
        route: 'SubMenuFirst',
      },
      {
        label: 'SubMenuSecond',
        route: 'SubMenuSecond',
      },
    ],
  },
  {
    label: 'Nested Drop',
    childs: [
      {
        label: 'Dept 1',
        childs: [
          {
            label: 'SubMenuFirst',
            route: 'SubMenuFirst',
          },
          {
            label: 'SubMenu2',
            route: 'SubMenu2',
          },
        ],
      },
    ],
  },
];
