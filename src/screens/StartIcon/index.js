import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {HeaderComp} from '../../components';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import OpenDrawer from '../../components/Header/OpenDrawer';

const StartIconScreen = ({navigation}) => {
  return (
    <View>
      <HeaderComp
        title="StartIcon"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />
    </View>
  );
};

export default StartIconScreen;
