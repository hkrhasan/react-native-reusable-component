import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
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
    ref,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [errorContainer, setErrorContainer] = useState(
    error ? inputStyle.row.error.container : {},
  );
  const [errorIcon, setErrorIcon] = useState(
    error ? inputStyle.row.error.icon : {},
  );
  const [internalError, setInternalError] = useState(null);

  const focusedObj = isFocused ? inputStyle.row.focused : {};
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
          onFocus={() => {
            setInternalError(null);
            setErrorContainer({});
            setErrorIcon({});
            setIsFocused(true);
          }}
          onBlur={() => {
            if (value.length < length) {
              setErrorContainer(inputStyle.row.error.container);
              setErrorIcon(inputStyle.row.error.icon);
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
      {error ||
        (internalError && (
          <Text style={{...inputStyle.error.text, ...styleErrorText}}>
            {error || internalError}
          </Text>
        ))}
    </View>
  );
};

export default PhoneInput;
