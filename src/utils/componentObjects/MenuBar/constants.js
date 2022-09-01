export const imgUri = 'https://reactjs.org/logo-og.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import colors from '../../../style/colors';

export const menuBars = [
  {
    label: 'Home',
    url: 'Home',
  },
  {
    label: 'Buttons',
    url: 'Buttons',
  },
  {
    label: 'StartIcon',
    url: 'StartIcon',
    startIcon: style => <AntDesign name={'user'} style={style} />,
  },
  {
    label: 'EndIcon',
    url: 'EndIcon',
    endIcon: style => <Feather name={'send'} style={style} />,
    // endIconFullRight: style => <Feather name={'send'} style={style} />,
  },
  {
    label: 'DropDown',
    childs: [
      {
        label: 'SubMenuFirst',
        url: 'SubMenuFirst',
      },
      {
        label: 'SubMenuSecond',
        url: 'SubMenuSecond',
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
            url: 'SubMenuFirst',
          },
          {
            label: 'SubMenu2',
            url: 'SubMenu2',
          },
        ],
      },
    ],
  },
];
