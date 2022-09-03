import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const ModalStyle = {
  container: {
    height: height / 3,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ModalStyle;
