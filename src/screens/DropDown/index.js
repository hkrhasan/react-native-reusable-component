/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {
  HeaderComp,
  DropDownSingleSelect,
  DropDownMultiSelect,
} from '../../components';
import colors from '../../style/colors';

const DropDownsScreen = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Option1', value: 'option1'},
    {label: 'Option2', value: 'option2'},
    {label: 'Option3', value: 'option3'},
  ]);

  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="DropDowns"
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
        <Text style={styles.heading}>DropDown with single select</Text>
        <DropDownSingleSelect
          value={value}
          setValue={setValue}
          items={items}
          setItems={setItems}
          zIndex={10}
          style={{marginBottom: 10}}
        />

        <Text style={styles.heading}>DropDown with multi select</Text>

        <DropDownMultiSelect
          value={multiValue}
          setValue={setMultiValue}
          items={items}
          setItems={setItems}
          min={0}
          max={5}
          itemKey={'value'}
          mode="BADGE"
          zIndex={9}
        />
      </ScrollView>
    </View>
  );
};

export default DropDownsScreen;

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
