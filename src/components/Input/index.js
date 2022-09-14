import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
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
    maxLength,
    minLength = 0,
    label,
    styleLabel,
    ref,
    errorClearOnChange,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [errorState, setErrorState] = useState(undefined);

  const focusedObj = isFocused ? inputStyle.row.focused : {};
  const errorLabel = errorState ? inputStyle.row.error.label : {};
  const errorContainer = errorState ? inputStyle.row.error.container : {};
  const errorIcon = errorState ? inputStyle.row.error.icon : {};

  useEffect(() => {
    setErrorState(error);
  }, [error]);

  return (
    <View style={{...inputStyle.wrapper, ...styleWrapper}}>
      {label && (
        <Text
          style={[
            inputStyle.row.label,
            // errorLabel,
            styleLabel,
          ]}>
          {label}
        </Text>
      )}
      <View
        style={{
          ...inputStyle.row.common,
          ...focusedObj,
          // ...errorContainer,
          ...styleContainer,
        }}>
        {/* startIcon */}
        {startIcon && startIcon({...inputStyle.row.icon, ...errorIcon})}
        <TextInput
          ref={ref}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChangeText={text => {
            if (text && errorClearOnChange) {
              setErrorState(undefined);
            } else {
              setErrorState(error);
            }
            setValue(text);
          }}
          placeholderTextColor={
            placeholderTextColor || error
              ? inputStyle.row.error.placeHolderTextColor
              : inputStyle.row.placeHolderTextColor
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
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
      {errorState && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {errorState}
        </Text>
      )}
    </View>
  );
};

export default InputComp;
