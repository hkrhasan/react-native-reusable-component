import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import DatePickerStyle from '../../utils/componentObjects/DatePicker/style';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

const dateFormatString = 'MM/DD/YYY';

const DatePickerComp = props => {
  const {
    startIcon,
    endIcon,
    styleContainer,
    styleErrorText,
    styleWrapper,
    styleInput,
    error,
    placeholder,
    placeholderTextColor,
    date,
    setDate,
    dateFormat = 'dd-MM-yyyy',
  } = props;
  const currDate = date || new Date();
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(format(currDate, dateFormat));
  const [open, setOpen] = useState(false);
  const focusedObj = isFocused ? DatePickerStyle.row.focused : {};
  const errorContainer = error ? DatePickerStyle.row.error.container : {};
  const errorIcon = error ? DatePickerStyle.row.error.icon : {};

  return (
    <View style={{...DatePickerStyle.wrapper, ...styleWrapper}}>
      <Pressable
        style={{
          ...DatePickerStyle.row.common,
          ...focusedObj,
          ...errorContainer,
          ...styleContainer,
        }}
        onPress={() => setOpen(true)}>
        {/* startIcon */}
        {startIcon && startIcon({...DatePickerStyle.row.icon, ...errorIcon})}
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor || error
              ? DatePickerStyle.row.error.placeHolderTextColor
              : DatePickerStyle.row.placeHolderTextColor
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={false}
          style={{...DatePickerStyle.row.input, ...styleInput}}
        />
        {/* endIcon */}
        {endIcon ? (
          endIcon({...DatePickerStyle.row.icon, ...errorIcon})
        ) : (
          <Feather
            name="calendar"
            style={[DatePickerStyle.row.icon, errorIcon]}
          />
        )}
      </Pressable>
      {error && (
        <Text style={{...DatePickerStyle.error.text, ...styleErrorText}}>
          {error}
        </Text>
      )}
      <DatePicker
        modal
        open={open}
        date={date || currDate}
        onConfirm={date => {
          setOpen(false);
          setValue(format(date, dateFormat));
          if (setDate) {
            setDate(date);
          }
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
    </View>
  );
};

export default DatePickerComp;
