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
    disableMargin,
  } = props;

  let flexDirection = 'row';

  if (btnPosition === 'bottom') {
    flexDirection = 'column-reverse';
  }
  if (btnPosition === 'top') {
    flexDirection = 'column';
  }
  if (btnPosition === 'right') {
    flexDirection = 'row-reverse';
  }
  const margins = disableMargin
    ? {}
    : {
        marginRight: flexDirection === 'row' ? 15 : 0,
        marginBottom: flexDirection === 'column' ? 10 : 0,
      };
  return (
    <View
      style={[
        RadioButtonsStyle.btnWrapper,
        styleBtnWrapper,
        {
          flexDirection,
          ...margins,
        },
      ]}>
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
  const {
    styleWrapper,
    buttons,
    setButtons,
    btnPosition,
    showLabel,
    styleBtnWrapper,
    disableMargin = false,
    label,
    styleLabel,
    componentWrapper,
  } = props;

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
    <View>
      {label && (
        <Text style={[RadioButtonsStyle.label, styleLabel]}>{label}</Text>
      )}
      <View style={[RadioButtonsStyle.wrapper, styleWrapper]}>
        {buttons?.map(button => (
          <RadioButton
            onPress={() => onRadioBtnClick(button)}
            selected={button.selected}
            key={button.id}
            btnPosition={btnPosition}
            label={button.label}
            showLabel={showLbl}
            styleBtnWrapper={styleBtnWrapper}
            disableMargin={disableMargin}
          />
        ))}
      </View>
    </View>
  );
};

export default RadioButtonsComp;
