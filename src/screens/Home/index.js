/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {CheckBoxesComp, HeaderComp, TabBarComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {TabArr} from '../../utils/componentObjects/TabBar/contants';
import {RadioButtonsComp} from '../../components';
import {buttons} from '../../utils/componentObjects/RadioButtons/constant';
import {checkList} from '../../utils/componentObjects/CheckBoxes/constant';

const HomeScreen = ({navigation}) => {
  const [radios, setRadios] = useState(buttons);
  const [checklistStack, setChacklistStack] = useState(checkList);

  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="Home"
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
          // backgroundColor: 'red',
        }}>
        {/* <RadioButtonsComp buttons={radios} setButtons={setRadios} /> */}

        <CheckBoxesComp list={checklistStack} setList={setChacklistStack} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
