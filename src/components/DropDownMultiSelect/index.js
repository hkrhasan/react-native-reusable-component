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
  } = props;
  const [open, setOpen] = useState(false);
  // const [innerInput, setInnerInput] = useState([]);

  // useEffect(() => {
  //   setSelectedValues(innerInput);
  // }, [innerInput, selectedValues]);
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
        {...props}
      />
      {error && (
        <Text style={{...inputStyle.error.text, ...styleErrorText}}>
          {error}
        </Text>
      )}
    </View>
  );
}

export default DropDownMultiSelect;
