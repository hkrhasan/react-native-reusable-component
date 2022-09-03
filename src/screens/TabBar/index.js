import {View, Text} from 'react-native';
import React from 'react';
import {TabArr} from '../../utils/componentObjects/TabBar/contants';
import {TabBarComp} from '../../components';

const TabBarScreen = () => {
  return (
    <View style={{flex: 1}}>
      <TabBarComp TabArr={TabArr} />
    </View>
  );
};

export default TabBarScreen;
