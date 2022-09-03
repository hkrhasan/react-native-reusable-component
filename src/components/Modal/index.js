import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import RNModal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../style/colors';
import ModalStyle from '../../utils/componentObjects/Modal/style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Modal = ({
  isVisible = false,
  styleModalContainer,
  height,
  width,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  animationInTiming = 500,
  animationOutTiming = 500,
  backdropTransitionInTiming = 500,
  backdropTransitionOutTiming = 500,
  children,
  ...props
}) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      backdropTransitionInTiming={backdropTransitionInTiming}
      backdropTransitionOutTiming={backdropTransitionOutTiming}
      {...props}>
      <View
        style={[ModalStyle.container, styleModalContainer, {height, width}]}>
        {children}
      </View>
    </RNModal>
  );
};

export default Modal;
