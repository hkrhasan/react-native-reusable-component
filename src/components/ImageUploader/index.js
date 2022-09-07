import {TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import ImageUploaderStyle from '../../utils/componentObjects/imageUploader/style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImageUploader = props => {
  const {styleContainer, imagePath, setImagePath} = props;

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        let source = res;
        setImagePath(source);
        // this.setState({
        //   resourcePath: source,
        // });
      }
    });
  };

  return (
    <TouchableOpacity
      onPress={selectFile}
      style={[ImageUploaderStyle.container, styleContainer]}>
      {imagePath?.data ? (
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + imagePath.data,
          }}
          style={[
            {
              height: ImageUploaderStyle.container.height,
              width: ImageUploaderStyle.container.width,
            },
          ]}
        />
      ) : (
        <View style={[ImageUploaderStyle.innerContainer]} />
      )}
    </TouchableOpacity>
  );
};

export default ImageUploader;
