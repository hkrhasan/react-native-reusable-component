/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
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
    error,
    styleErrorText,
    errorClearOnChange,
  } = props;

  const [errorState, setErrorState] = useState(undefined);

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
    if (errorClearOnChange) {
      setErrorState(error);
    }
  };

  const onIncrement = () => {
    if (max) {
      if (quantity >= max) {
        return;
      }
    }
    setQuantity(quantity + 1);
    if (errorClearOnChange) {
      setErrorState(undefined);
    }
  };

  const PlusDisable =
    max !== undefined ? (quantity >= max ? PlusMinusStyle.disable : {}) : {};
  const MinusDisable = quantity <= min ? PlusMinusStyle.disable : {};

  useEffect(() => {
    setErrorState(error);
  }, [error]);
  return (
    <View style={[styleComponentWrapper]}>
      {label && <Text style={[PlusMinusStyle.label, styleLabel]}>{label}</Text>}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={onDecrement}
          disabled={quantity <= min}
          style={[
            PlusMinusStyle.buttonContainer,
            styleActionBtnContainer,
            {height: size, width: size},
            MinusDisable,
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
          disabled={quantity >= max}
          style={[
            PlusMinusStyle.buttonContainer,
            {height: size, width: size},
            PlusDisable,
          ]}>
          <Text
            style={[
              {color: colors.white, fontSize: 20, fontWeight: '600'},
              styleActionBtnText,
            ]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      {errorState && (
        <Text style={[PlusMinusStyle.error, styleErrorText]}>{errorState}</Text>
      )}
    </View>
  );
};

export default PlusMinusButton;
