/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapStyle from '../../utils/componentObjects/map/style';
const {width, height} = Dimensions.get('window');

export default props => {
  const {initialRegion, markers, styleContainer, styleMap} = props;

  return (
    <View style={[MapStyle.container, styleContainer]}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[MapStyle.map, styleMap]}
        showsUserLocation={true}
        initialRegion={initialRegion}>
        {markers && markers()}
      </MapView>
    </View>
  );
};
