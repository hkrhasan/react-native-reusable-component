// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import inputStyle from '../../utils/componentObjects/Input/style';

function DropDownSingleSelect(props) {
  const {
    value,
    setValue,
    items,
    setItems,
    label,
    styleLabel,
    styleComponentWrapper,
    error,
    styleErrorText,
    errorClearOnChange,
  } = props;
  const [open, setOpen] = useState(false);
  const [errorState, setErrorState] = useState(undefined);

  useEffect(() => {
    if (error) {
      setErrorState(error);
    }
  }, [error]);

  return (
    <View style={{...inputStyle.wrapper, ...styleComponentWrapper}}>
      {label && <Text style={[inputStyle.row.label, styleLabel]}>{label}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={v => {
          if (v && errorClearOnChange) {
            setErrorState(undefined);
          } else setErrorState(error);
        }}
        {...props}
      />
      {errorState && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {errorState}
        </Text>
      )}
    </View>
  );
}

export default DropDownSingleSelect;
