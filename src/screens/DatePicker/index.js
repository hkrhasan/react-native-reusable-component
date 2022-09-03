import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {DatePickerComp, HeaderComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {useState} from 'react';

const DatePickerScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const onPress = () => {
    console.warn('Clicked');
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <HeaderComp
        title="DatePickers"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}>
        <Text style={styles.heading}>DatePicker</Text>
        <DatePickerComp date={date} setDate={setDate} />
      </ScrollView>
    </View>
  );
};

export default DatePickerScreen;

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
