import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ActionSheetStyle = {
  container: {
    flex: 1,
    height: height - 200,
    width: width,
    // height: height / 3,
    // marginHorizontal: 10,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#000',
    // borderRadius: 10,
    // padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
};

export default ActionSheetStyle;
