/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderComp, MapComp, SocialIconsComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {
  socialIcons,
  socialButtons,
} from '../../utils/componentObjects/socialIcons/constant';

const MapScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="MapScreen"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MapComp
          initialRegion={{
            latitude: 28.7254302,
            longitude: 77.2969926,
            latitudeDelta: 0.08,
            longitudeDelta: 0.04,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MapScreen;

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
