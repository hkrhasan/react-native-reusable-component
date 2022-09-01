import {View, Text, Image, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import HeaderStyle from '../../utils/componentObjects/Header/style';

import React from 'react';

const Header = props => {
  const {title, userImage, barIcon, backButton} = props;

  return (
    <View style={{...HeaderStyle.container}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Bar Icon */}
        {barIcon && barIcon({marginRight: 20})}
        {/* <Pressable onPress={onPress} style={{marginRight: 20}}>
          <Feather name={'menu'} style={{...HeaderStyle.barIcon}} />
        </Pressable> */}

        {/* Back button */}
        {backButton && backButton({marginRight: 20})}

        {/* Title */}
        {title && <Text style={{...HeaderStyle.title}}>{title}</Text>}
      </View>

      {/* Image */}
      {userImage && (
        <Image source={{uri: userImage}} style={{...HeaderStyle.image}} />
      )}
    </View>
  );
};

export default Header;
