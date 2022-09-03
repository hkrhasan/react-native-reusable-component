/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {CheckBoxesComp, HeaderComp, RadioButtonsComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {buttons} from '../../utils/componentObjects/RadioButtons/constant';
import {checkList} from '../../utils/componentObjects/CheckBoxes/constant';
import colors from '../../style/colors';

const RadioCheckBox = ({navigation}) => {
  const [radios, setRadios] = useState(buttons);
  const [checklistStack, setChacklistStack] = useState(checkList);

  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="Radio And CheckBox"
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
        <Text style={styles.heading}>Radio buttons</Text>
        <RadioButtonsComp buttons={radios} setButtons={setRadios} />
        <Text style={styles.heading}>CheckBoxes</Text>
        <CheckBoxesComp list={checklistStack} setList={setChacklistStack} />
      </ScrollView>
    </View>
  );
};

export default RadioCheckBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.black,
    marginBottom: 7,
  },
  smallHead: {
    fontSize: 14,
    color: colors.black,
  },
});
