import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import colors from '../../style/colors';
import ButtonStyle, {btnSize} from '../../utils/componentObjects/Button/style';

const ButtonComp = props => {
  const {
    type,
    label,
    variant,
    size,
    btnStyle,
    startIcon,
    endIcon,
    onPress,
    containerStyle,
    textStyle,
    loader,
  } = props;

  let variantKey = btnStyle || 'primary';
  let sizeKey = size || 'medium';
  let variants = ButtonStyle[variantKey] || {};

  const defaultStyle = variants[variant || 'contained'];

  const paddingVertical =
    sizeKey === 'small' ? 10 : sizeKey === 'large' ? 18 : 16;
  const paddingHorizontal = 14;
  const borderRadius = 11;
  const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  switch (type) {
    case 'loading':
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...defaultStyle.container,
            ...{
              paddingVertical,
              paddingHorizontal,
              borderRadius,
              ...center,
            },
            ...containerStyle,
          }}>
          {loader ? (
            loader({...defaultStyle.text})
          ) : (
            <ActivityIndicator
              size={sizeKey === 'medium' ? 'small' : sizeKey}
              color={defaultStyle.text.color || colors.white}
            />
          )}
          <Text
            style={{
              ...defaultStyle.text,
              ...btnSize[sizeKey],
              ...{marginLeft: 12},
              ...textStyle,
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...defaultStyle.container,
            ...{
              paddingVertical,
              paddingHorizontal,
              borderRadius,
              ...center,
            },
            ...containerStyle,
          }}>
          {startIcon && startIcon({...defaultStyle.text, ...btnSize[sizeKey]})}
          <Text
            style={{
              ...defaultStyle.text,
              ...btnSize[sizeKey],
              ...{
                marginLeft: startIcon ? 12 : 0,
                marginRight: endIcon ? 12 : 0,
              },
              ...textStyle,
            }}>
            {label}
          </Text>
          {endIcon && endIcon({...defaultStyle.text, ...btnSize[sizeKey]})}
        </TouchableOpacity>
      );
  }
};

export default ButtonComp;
