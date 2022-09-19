/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderComp, ListAccordian} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {listAccordianMenus} from '../../utils/componentObjects/ListAccordian/constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListAccordianScreen = ({navigation}) => {
  const renderAccordians = () =>
    listAccordianMenus.map((accordian, index) => (
      <ListAccordian
        key={index}
        toggleDownIcon={style => {
          return <Icon name="keyboard-arrow-down" style={[style]} />;
        }}
        toggleUpIcon={style => (
          <Icon name="keyboard-arrow-up" style={[style]} />
        )}
        title={accordian.title}
        data={accordian.data}
      />
    ));
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="ListAccordianScreen"
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
        {renderAccordians()}
      </ScrollView>
    </View>
  );
};

export default ListAccordianScreen;

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
