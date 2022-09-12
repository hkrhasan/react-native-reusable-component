import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';

const SliderComp = props => {
  const {value, setValue, styleComponentWrapper} = props;
  return (
    <View style={[styleComponentWrapper]}>
      <Slider
        {...props}
        value={value}
        onValueChange={value => setValue({value})}
      />
    </View>
  );
};

export default SliderComp;
