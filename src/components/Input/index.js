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
    multiline,
    numberOfLines,
    textAlignVertical,
    editable,
    onSubmitEditing,
    ref,
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
          ref={ref}
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
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          editable={editable}
          style={{...inputStyle.row.input, ...styleInput}}
          onSubmitEditing={onSubmitEditing}
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
