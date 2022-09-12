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
import inputStyle from '../../utils/componentObjects/Input/style';

function DropDownMultiSelect(props) {
  const {
    value,
    setValue,
    items,
    setItems,
    mode,
    label,
    styleLabel,
    styleComponentWrapper,
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <View style={{...inputStyle.wrapper, ...styleComponentWrapper}}>
      {label && <Text style={[inputStyle.row.label, styleLabel]}>{label}</Text>}
      <DropDownPicker
        multiple={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        mode={mode || 'BADGE'}
        {...props}
      />
    </View>
  );
}

export default DropDownMultiSelect;
