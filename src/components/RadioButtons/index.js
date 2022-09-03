import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import RadioButtonsStyle from '../../utils/componentObjects/RadioButtons/style';

const RadioButton = props => {
  const {
    styleBtnWrapper,
    onPress,
    selected,
    styleBtnOuter,
    styleBtnInner,
    styleBtnTitle,
    btnPosition,
    label,
    showLabel,
  } = props;

  let flexDirection = 'row';

  if (btnPosition === 'bottom') flexDirection = 'column-reverse';
  if (btnPosition === 'top') flexDirection = 'column';
  if (btnPosition === 'right') flexDirection = 'row-reverse';

  return (
    <View
      style={[RadioButtonsStyle.btnWrapper, styleBtnWrapper, {flexDirection}]}>
      <TouchableOpacity
        onPress={onPress}
        style={[RadioButtonsStyle.btnOuter, styleBtnOuter]}>
        {selected ? (
          <View style={[RadioButtonsStyle.btnInner, styleBtnInner]} />
        ) : null}
      </TouchableOpacity>
      {label && (
        <TouchableOpacity
          onPress={onPress}
          style={[
            {
              marginLeft: flexDirection === 'row' ? 5 : 0,
              marginRight: flexDirection === 'row-reverse' ? 5 : 0,
              marginTop: flexDirection === 'column' ? 5 : 0,
              marginBottom: flexDirection === 'column-reverse' ? 5 : 0,
            },
          ]}>
          {showLabel && label && (
            <Text style={[RadioButtonsStyle.btnTitle, styleBtnTitle]}>
              {label}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const RadioButtonsComp = props => {
  const {styleWrapper, buttons, setButtons, btnPosition, showLabel} = props;

  let showLbl = showLabel === undefined ? true : showLabel;

  const onRadioBtnClick = item => {
    let updatedState = buttons.map(button =>
      button.id === item.id
        ? {...button, selected: true}
        : {...button, selected: false},
    );
    setButtons(updatedState);
  };

  return (
    <View style={[RadioButtonsStyle.wrapper, styleWrapper]}>
      {buttons?.map(button => (
        <RadioButton
          onPress={() => onRadioBtnClick(button)}
          selected={button.selected}
          key={button.id}
          btnPosition={btnPosition}
          label={button.label}
          showLabel={showLbl}
        />
      ))}
    </View>
  );
};

export default RadioButtonsComp;
