import {TouchableOpacity, Image, View} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import ImageUploaderStyle from '../../utils/componentObjects/imageUploader/style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImageUploader = props => {
  const {
    styleContainer,
    imagePath,
    setImagePath,
    launchType,
    onPress,
    setLaunchType,
  } = props;

  const selectFile = () => {
    if (launchType) {
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

      let imageFunction = launchImageLibrary;

      if (launchType === 'camera') {
        imageFunction = launchCamera;
      }

      imageFunction(options, res => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
          setLaunchType && setLaunchType(null);
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
          setLaunchType && setLaunchType(null);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          setLaunchType && setLaunchType(null);
        } else {
          let source = res;
          setImagePath(source);
          setLaunchType && setLaunchType(null);
        }
      });
    }
  };

  useEffect(() => {
    selectFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchType]);

  return (
    <TouchableOpacity
      onPress={onPress}
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
