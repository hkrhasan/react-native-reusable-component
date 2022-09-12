/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PlusMinusStyle from '../../utils/componentObjects/PlusMinusButtonComp/style';
import colors from '../../style/colors';

const PlusMinusButton = props => {
  const {
    quantity,
    setQuantity,
    size = 35,
    styleActionBtnContainer,
    styleActionBtnText,
    styleMidText,
    min = 0,
    max,
    label,
    styleLabel,
    styleComponentWrapper,
  } = props;

  if (quantity < min) {
    setQuantity(min);
  }

  // ============== UTILITY FUNCTIONS ================
  const onDecrement = () => {
    if (quantity <= min) {
      setQuantity(min);
      return;
    }
    setQuantity(quantity - 1);
  };

  const onIncrement = () => {
    if (max) {
      if (quantity >= max) {
        return;
      }
    }
    setQuantity(quantity + 1);
  };

  return (
    <View style={[styleComponentWrapper]}>
      {label && <Text style={[PlusMinusStyle.label, styleLabel]}>{label}</Text>}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={onDecrement}
          style={[
            PlusMinusStyle.buttonContainer,
            styleActionBtnContainer,
            {height: size, width: size},
          ]}>
          <Text
            style={[
              {color: colors.white, fontSize: 20, fontWeight: '600'},
              styleActionBtnText,
            ]}>
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            {paddingHorizontal: 10, fontSize: 20},
            PlusMinusButton.text,
            styleMidText,
          ]}>
          {quantity}
        </Text>
        <TouchableOpacity
          onPress={onIncrement}
          style={[PlusMinusStyle.buttonContainer, {height: size, width: size}]}>
          <Text
            style={[
              {color: colors.white, fontSize: 20, fontWeight: '600'},
              styleActionBtnText,
            ]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlusMinusButton;
