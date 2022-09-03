/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {
  InputComp,
  HeaderComp,
  InputPassComp,
  DropDownSingleSelect,
  DropDownMultiSelect,
} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';

const InputScreen = ({navigation}) => {
  const [value, setValue] = useState('');

  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="Buttons"
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
        <Text style={styles.heading}>Input Simple</Text>
        <InputComp value={value} setValue={setValue} />
        <Text style={styles.heading}>Input StartIcon</Text>
        <InputComp
          value={value}
          setValue={setValue}
          startIcon={style => <AntDesign name="user" style={style} />}
        />
        <Text style={styles.heading}>Input EndIcon</Text>
        <InputComp
          value={value}
          setValue={setValue}
          endIcon={style => <Feather name="send" style={style} />}
        />
        <InputComp
          erorr="somethind went wrong!"
          value={value}
          setValue={setValue}
          endIcon={style => <Feather name="send" style={style} />}
        />
        <Text style={styles.heading}>Password Input</Text>
        <InputPassComp
          value={value}
          setValue={setValue}
          // endIcon={style => <Feather name="send" style={style} />}
        />
      </ScrollView>
    </View>
  );
};

export default InputScreen;

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
