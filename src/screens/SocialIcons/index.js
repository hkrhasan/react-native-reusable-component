/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderComp, SocialIconsComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {
  socialIcons,
  socialButtons,
} from '../../utils/componentObjects/socialIcons/constant';

const SocialIconScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="SocialIconScreen"
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
          justifyContent: 'center',
        }}>
        <View style={{marginBottom: 30, marginTop: 100}}>
          <SocialIconsComp
            flatListProps={{horizontal: true}}
            data={socialIcons}
          />
        </View>
        <SocialIconsComp data={socialButtons} />
      </ScrollView>
    </View>
  );
};

export default SocialIconScreen;

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
