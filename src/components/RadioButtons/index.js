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
          <Text style={[RadioButtonsStyle.btnTitle, styleBtnTitle]}>
            {label}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const RadioButtonsComp = props => {
  const {styleWrapper, buttons, setButtons, btnPosition, showLabel} = props;

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
        />
      ))}
    </View>
  );
};

export default RadioButtonsComp;

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
    marginVertical: 5,
  },
});
