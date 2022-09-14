/* eslint-disable react-hooks/exhaustive-deps */
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

function DropDownMultiSelect(props) {
  const {
    setSelectedValues,
    selectedValues,
    items,
    setItems,
    mode,
    label,
    styleLabel,
    styleComponentWrapper,
    error,
    styleErrorText,
    errorClearOnChange,
  } = props;
  const [open, setOpen] = useState(false);
  const [errorState, setErrorState] = useState(undefined);
  // const [innerInput, setInnerInput] = useState([]);

  useEffect(() => {
    setErrorState(error);
  }, [error]);
  return (
    <View style={{...inputStyle.wrapper, ...styleComponentWrapper}}>
      {label && <Text style={[inputStyle.row.label, styleLabel]}>{label}</Text>}
      <DropDownPicker
        multiple={true}
        open={open}
        value={selectedValues}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedValues}
        setItems={setItems}
        mode={mode || 'BADGE'}
        onChangeValue={value => {
          console.log(value, value.length && errorClearOnChange);
          if (value.length && errorClearOnChange) {
            setErrorState(undefined);
          } else {
            setErrorState(error);
          }
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

export default DropDownMultiSelect;
