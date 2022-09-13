import {TouchableOpacity, Image, View} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import ImageUploaderStyle from '../../utils/componentObjects/imageUploader/style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';

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
        if (res.didCancel) {
          setLaunchType && setLaunchType(null);
        } else if (res.error) {
          setLaunchType && setLaunchType(null);
        } else if (res.customButton) {
          setLaunchType && setLaunchType(null);
        } else {
          let source = res.assets[0];
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
      <Image
        source={{
          uri: imagePath.uri || imgUri,
        }}
        style={[
          ImageUploaderStyle.image,
          {
            height: ImageUploaderStyle.container.height,
            width: ImageUploaderStyle.container.width,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ImageUploader;
