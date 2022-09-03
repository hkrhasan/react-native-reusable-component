// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
function AutoCompleteSingle(props) {
  const {value, setValue, items, setItems} = props;
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      searchable={true}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      {...props}
    />
  );
}

export default AutoCompleteSingle;
