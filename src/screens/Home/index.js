import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {HeaderComp, TabBarComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {TabArr} from '../../utils/componentObjects/TabBar/contants';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <HeaderComp
        title="Home"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />
    </View>
  );
};

export default HomeScreen;
