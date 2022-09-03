import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import inputStyle from '../../utils/componentObjects/InputPassword/style';
import Feather from 'react-native-vector-icons/Feather';

const InputPassComp = props => {
  const {
    startIcon,
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
  const [showPass, setShowPass] = useState(false);

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
          secureTextEntry={!showPass}
          style={{...inputStyle.row.input, ...errorIcon, ...styleInput}}
        />
        {/* endIcon */}
        <Pressable onPress={() => setShowPass(!showPass)}>
          <Feather
            name={showPass ? 'eye-off' : 'eye'}
            style={{...inputStyle.row.icon, ...errorIcon}}
          />
        </Pressable>
      </View>
      {error && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputPassComp;
