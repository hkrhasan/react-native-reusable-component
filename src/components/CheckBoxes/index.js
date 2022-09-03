import {View, Text} from 'react-native';
import React, {useState} from 'react';
// import {CheckBox} from 'react-native-elements';
import {Checkbox} from 'react-native-paper';
import CheckBoxesStyle from '../../utils/componentObjects/CheckBoxes/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CheckBoxComp = props => {
  const {
    styleCheckWrapper,
    onPress,
    checked,
    styleTitle,
    title,
    boxPosition,
    color,
  } = props;

  let flexDirection = 'row';

  if (boxPosition === 'bottom') {
    flexDirection = 'column-reverse';
  }
  if (boxPosition === 'top') {
    flexDirection = 'column';
  }
  if (boxPosition === 'right') {
    flexDirection = 'row-reverse';
  }

  return (
    <View
      style={[CheckBoxesStyle.btnWrapper, styleCheckWrapper, {flexDirection}]}>
      <View style={{}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={onPress}
          color={color}
          uncheckedColor={color}
        />
      </View>
      {title && (
        <TouchableOpacity onPress={onPress}>
          <Text style={[CheckBoxesStyle.btnTitle, styleTitle, {color}]}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const CheckBoxesComp = props => {
  const {styleWrapper, list, setList, color, boxPosition} = props;

  const [checked, setChecked] = useState(false);

  const onCheckBoxClick = index => {
    let checkBoxList = [...list];
    let checkBox = checkBoxList[index];

    if (checkBox.checked) checkBox.checked = false;
    else checkBox.checked = true;

    checkBoxList[index] = checkBox;

    setList(checkBoxList);
  };
  return (
    <View style={[CheckBoxesStyle.wrapper, styleWrapper]}>
      {list?.map((checkbox, index) => (
        <CheckBoxComp
          key={index}
          checked={checkbox.checked}
          title={checkbox.title}
          onPress={() => onCheckBoxClick(index)}
          boxPosition={boxPosition}
          color={color}
        />
      ))}
    </View>
  );
};

export default CheckBoxesComp;
