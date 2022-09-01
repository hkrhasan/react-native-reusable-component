import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {MenuBarComp} from '../components';
import {menuBars} from '../utils/componentObjects/MenuBar/constants';

const CustomDrawer = props => {
  const activeRoute =
    props.navigation.getState().routeNames[props.navigation.getState().index];

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1, paddingHorizontal: 10}}
      {...props}>
      {menuBars.map(menu => (
        <MenuBarComp
          key={menu.label}
          {...menu}
          parentProps={props}
          activeRoute={activeRoute}
        />
      ))}
      {/* <MenuBarComp label="Home" /> */}
      {/* <CustomDrawerItem label="Hkrhasn" /> */}
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
