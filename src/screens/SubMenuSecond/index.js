import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {HeaderComp} from '../../components';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import OpenDrawer from '../../components/Header/OpenDrawer';

const SubMenuSecondScreen = ({navigation}) => {
  return (
    <View>
      <HeaderComp
        title="SubMenuSecond"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        // userImage={imgUri}
      />
      {/* <Button
        onPress={() => navigation.navigate('ButtonScreen')}
        title="Go to Buttons"
      /> */}
    </View>
  );
};

export default SubMenuSecondScreen;
