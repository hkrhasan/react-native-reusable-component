import {View, Text} from 'react-native';
import React from 'react';
import {Modalize} from 'react-native-modalize';
import {ScrollView} from 'react-native-gesture-handler';

const Modal2 = props => {
  const {modalRef, children, modalStyle} = props;

  return (
    <Modalize
      ref={modalRef}
      {...props}
      modalStyle={{
        marginBottom: 'auto',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        ...modalStyle,
      }}>
      <ScrollView>{children}</ScrollView>
    </Modalize>
  );
};

export default Modal2;
