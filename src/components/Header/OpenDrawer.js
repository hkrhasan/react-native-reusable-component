import {Pressable} from 'react-native';
import HeaderStyle from '../../utils/componentObjects/Header/style';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const OpenDrawer = props => {
  const {style, onPress} = props;
  return (
    <Pressable onPress={onPress} style={style}>
      <Feather name={'menu'} style={HeaderStyle.barIcon} />
    </Pressable>
  );
};

export default OpenDrawer;
