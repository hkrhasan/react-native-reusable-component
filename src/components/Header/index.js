import {View, Text, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HeaderStyle from '../../utils/componentObjects/Header/style';

import React from 'react';

const Header = props => {
  const {
    title,
    userImage,
    barIcon,
    styleContainer,
    styleBarIcon,
    styleTitle,
    styleImage,
  } = props;

  return (
    <View style={{...HeaderStyle.container, ...styleContainer}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Bar Icon */}
        {barIcon && barIcon({marginRight: 20, ...styleBarIcon})}
        {/* <Pressable onPress={onPress} style={{marginRight: 20}}>
          <Feather name={'menu'} style={{...HeaderStyle.barIcon}} />
        </Pressable> */}

        {/* Title */}
        {title && (
          <Text style={{...HeaderStyle.title, ...styleTitle}}>{title}</Text>
        )}
      </View>

      {/* Image */}
      {userImage && (
        <Image
          source={{uri: userImage}}
          style={{...HeaderStyle.image, ...styleImage}}
        />
      )}
    </View>
  );
};

export default Header;
