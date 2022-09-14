import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import inputStyle from '../../utils/componentObjects/Input/style';

const PhoneInput = props => {
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
    length = 10,
    label,
    styleLabel,
    ref,
    errorClearOnChange,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [errorState, setErrorState] = useState(undefined);

  const [errorContainer, setErrorContainer] = useState(
    errorState ? inputStyle.row.error.container : {},
  );
  const [errorIcon, setErrorIcon] = useState(
    errorState ? inputStyle.row.error.icon : {},
  );

  const [errorLabel, setErrorLabel] = useState(
    errorState ? inputStyle.row.error.label : {},
  );

  const focusedObj = isFocused ? inputStyle.row.focused : {};

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
          placeholder={placeholder}
          onChangeText={text => {
            setValue(text);

            if (errorClearOnChange && !text) {
              setErrorState(error);
              setErrorContainer(inputStyle.row.error.container);
              setErrorIcon(inputStyle.row.error.icon);
              setErrorLabel(inputStyle.row.error.label);
            } else {
              setErrorState(undefined);
            }
          }}
          placeholderTextColor={
            placeholderTextColor || error
              ? inputStyle.row.error.placeHolderTextColor
              : inputStyle.row.placeHolderTextColor
          }
          onFocus={() => {
            setErrorContainer({});
            setErrorIcon({});
            setIsFocused(true);
            setErrorLabel({});
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          editable={editable}
          style={{...inputStyle.row.input, ...styleInput}}
          maxLength={length}
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
      {/* {error ||
        (internalError && (
          <Text style={{...inputStyle.error.text, ...styleErrorText}}>
            {error || internalError}
          </Text>
        ))} */}
    </View>
  );
};

export default PhoneInput;
