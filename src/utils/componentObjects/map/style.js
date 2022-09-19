import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const MapStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {width: '100%', height: '100%'},
});

export default MapStyle;
