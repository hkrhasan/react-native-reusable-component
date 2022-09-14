/* eslint-disable react-native/no-inline-styles */
import {FlatList} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/themed';

const CheckBoxesComp = props => {
  const {list, setList, horizontal, styleListWrapper, checkBoxProps} = props;

  const [checked, setChecked] = useState(false);

  const onCheckBoxClick = index => {
    let checkBoxList = [...list];
    let checkBox = checkBoxList[index];

    if (checkBox.checked) {
      checkBox.checked = false;
    } else {
      checkBox.checked = true;
    }

    checkBoxList[index] = checkBox;

    setList(checkBoxList);
  };
  return (
    <FlatList
      style={styleListWrapper}
      horizontal={horizontal}
      data={list}
      renderItem={({item, index}) => (
        <CheckBox
          containerStyle={{backgroundColor: 'transparent'}}
          {...checkBoxProps}
          checked={item.checked}
          title={item.title}
          onPress={() => onCheckBoxClick(index)}
        />
      )}
      keyExtractor={item => item.title}
    />
  );
};

export default CheckBoxesComp;
