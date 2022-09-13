import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const ModalStyle = {
  container: {
    height: height / 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
};

export default ModalStyle;
