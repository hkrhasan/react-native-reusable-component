import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabExample1, BottomTabExample2} from '../../../screens';
import {TabBody} from '../../../components';

import colors from '../../../style/colors';

const TabArr = [
  {
    route: 'About',
    label: 'About',
    activeIcon: style => <Ionicons name={'information-circle'} style={style} />,
    inActiveIcon: style => (
      <Ionicons name={'information-circle-outline'} style={style} />
    ),
    component: () => (
      <TabBody style={{backgroundColor: colors.success}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>About</Text>
        </View>
      </TabBody>
    ),
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
    component: () => (
      <TabBody style={{backgroundColor: colors.warning}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>Contact</Text>
        </View>
      </TabBody>
    ),
  },
];

export {TabArr};
