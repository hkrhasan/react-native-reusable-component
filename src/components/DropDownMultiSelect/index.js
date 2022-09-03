import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDownMultiSelect(props) {
  const {value, setValue, items, setItems} = props;
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      multiple={true}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      {...props}
    />
  );
}

export default DropDownMultiSelect;
