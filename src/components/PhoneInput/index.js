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
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [errorState, setErrorState] = useState(undefined);

  const [errorContainer, setErrorContainer] = useState(
    errorState ? inputStyle.row.error.container : {},
  );
  const [errorIcon, setErrorIcon] = useState(
    errorState ? inputStyle.row.error.icon : {},
  );
  const [internalError, setInternalError] = useState(null);

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
        <Text style={[inputStyle.row.label, errorLabel, styleLabel]}>
          {label}
        </Text>
      )}
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
          onFocus={() => {
            setInternalError(null);
            setErrorContainer({});
            setErrorIcon({});
            setIsFocused(true);
            setErrorLabel({});
          }}
          onBlur={() => {
            if (value.length < length) {
              setErrorContainer(inputStyle.row.error.container);
              setErrorIcon(inputStyle.row.error.icon);
              setErrorLabel(inputStyle.row.error.label);
              setInternalError(`Length should be minimum ${length}`);
            }
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
      {internalError && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {internalError}
        </Text>
      )}

      {error && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {error}
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
