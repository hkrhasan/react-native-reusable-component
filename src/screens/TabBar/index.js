import {View, Text} from 'react-native';
import React from 'react';
import {TabArr} from '../../utils/componentObjects/TabBar/contants';
import {TabBarComp} from '../../components';
import {Tabs} from '../../utils/componentObjects/TabBar/contants';

const TabBarScreen = () => {
  return (
    <View style={{flex: 1}}>
      <TabBarComp tabs={Tabs} />
    </View>
  );
};

export default TabBarScreen;
