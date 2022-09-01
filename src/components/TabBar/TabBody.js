import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const TabBody = ({children, style}) => {
  return <ScrollView style={style}>{children}</ScrollView>;
};

export default TabBody;
