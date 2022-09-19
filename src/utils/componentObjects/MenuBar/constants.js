export const imgUri = 'https://reactjs.org/logo-og.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import colors from '../../../style/colors';

export const menuBars = [
  {
    label: 'Home',
    route: 'Home',
  },
  {
    label: 'Menu ITem with start icon',
    route: 'StartIcon',
    startIcon: style => <AntDesign name={'user'} style={style} />,
  },
  {
    label: 'Menu full right',
    route: 'EndIcon',
    endIconFullRight: style => <Feather name={'send'} style={style} />,
    // endIconFullRight: style => <Feather name={'send'} style={style} />,
  },
  {
    label: 'Menu ITem with end icon',
    route: 'EndIcon',
    endIcon: style => <Feather name={'send'} style={style} />,
    // endIconFullRight: style => <Feather name={'send'} style={style} />,
  },
  {
    label: 'Layout Example',
    childs: [
      {
        label: 'Form',
        route: 'Form',
      },
      {
        label: 'Form2',
        route: 'Form2',
      },
    ],
  },
  {
    label: 'Components',
    childs: [
      {
        label: 'Form Element',
        childs: [
          {
            label: 'DatePickers',
            route: 'DatePickers',
          },
          {
            label: 'Inputs',
            route: 'Inputs',
          },
          {
            label: 'Buttons',
            route: 'Buttons',
          },
          {
            label: 'TabBar',
            route: 'TabBar',
          },
          {
            label: 'Dropdown',
            route: 'Dropdown',
          },
          {
            label: 'AutoComplete',
            route: 'AutoComplete',
          },
          {
            label: 'RadioCheckBoxes',
            route: 'RadioCheckBoxes',
          },
        ],
      },
      {
        label: 'Modal',
        route: 'Modal',
      },
      {
        label: 'ListAccordian',
        route: 'ListAccordian',
      },
      {
        label: 'SocialIconScreen',
        route: 'SocialIconScreen',
      },
      {
        label: 'MapScreen',
        route: 'MapScreen',
      },
      {
        label: 'ActionSheet',
        route: 'ActionSheet',
      },
    ],
  },
];
