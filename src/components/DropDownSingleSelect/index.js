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
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

// import DropDownSingleSelectStyle from '../../utils/componentObjects/DropDownSingleSelect/style';
// import colors from '../../style/colors';

// const DropDownSingleSelect = props => {
//   const {
//     options,
//     styleWrapper,
//     styleContainer,
//     styleInput,
//     placeholder,
//     styleDropDowContainer,
//     // value,
//     // setValue,
//     renderRow,
//     styleRenderRow,
//     styleRenderRowText,
//     styleSeparator,
//     zIndex,
//   } = props;
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'},
//     {label: 'Option1', value: 'option1'},
//     {label: 'Option2', value: 'option2'},
//     {label: 'Option3', value: 'option3'},
//     {label: 'Option4', value: 'option4'},
//   ]);
//   return (
//     <View style={{position: 'relative', zIndex, height: 58}}>
//       <View
//         style={{
//           flex: 1,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}>
//         <Pressable
//           onPress={() => setOpen(!open)}
//           style={{
//             height: 57,
//             borderWidth: 1,
//             borderColor: '#000',
//             backgroundColor: '#fff',
//             borderRadius: 10,
//           }}></Pressable>
//         {open && (
//           <View
//             style={{
//               minHeight: 50,
//               maxHeight: 150,
//               backgroundColor: '#fff',
//               borderRadius: 10,
//               marginTop: 7,
//             }}>
//             <ScrollView style={{backgroundColor: 'green'}}>
//               <View style={{height: 70, backgroundColor: 'red'}}></View>
//               <View style={{height: 70, backgroundColor: 'yellow'}}></View>
//               <View style={{height: 70, backgroundColor: 'orange'}}></View>
//             </ScrollView>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default DropDownSingleSelect;

function DropDownSingleSelect(props) {
  const {value, setValue, items, setItems} = props;
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
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

export default DropDownSingleSelect;
