import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import inputStyle from '../../utils/componentObjects/Input/style';

const InputComp = props => {
  const {
    startIcon,
    endIcon,
    value,
    setValue,
    styleContainer,
    styleErrorText,
    styleWrapper,
    styleInput,
    error,
    placeholder,
    placeholderTextColor,
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const focusedObj = isFocused ? inputStyle.row.focused : {};
  const errorContainer = error ? inputStyle.row.error.container : {};
  const errorIcon = error ? inputStyle.row.error.icon : {};
  return (
    <View style={{...inputStyle.wrapper, ...styleWrapper}}>
      <View
        style={{
          ...inputStyle.row.common,
          ...focusedObj,
          ...errorContainer,
          ...styleContainer,
        }}>
        {/* startIcon */}
        {startIcon && startIcon({...inputStyle.row.icon, ...errorIcon})}
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={setValue}
          placeholderTextColor={
            placeholderTextColor || error
              ? inputStyle.row.error.placeHolderTextColor
              : inputStyle.row.placeHolderTextColor
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{...inputStyle.row.input, ...styleInput}}
        />
        {/* endIcon */}
        {endIcon && endIcon({...inputStyle.row.icon, ...errorIcon})}
      </View>
      {error && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputComp;
