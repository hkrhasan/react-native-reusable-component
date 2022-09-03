/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView} from 'react-native';
import React from 'react';
import {HeaderComp, ModalComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
const ActionSheetScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="ActionSheet"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 12,
          flex: 1,
        }}>
        <ModalComp />
      </ScrollView>
    </View>
  );
};

export default ActionSheetScreen;
