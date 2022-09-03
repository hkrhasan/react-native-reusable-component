/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Button, Text} from 'react-native';
import React from 'react';
import {ButtonComp, HeaderComp, ModalComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';

const ModalScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={{flex: 1}}>
      <HeaderComp
        title="Modals"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 12,
          flex: 1,
        }}>
        <ButtonComp label="showModal" onPress={handleModal} />
        <ModalComp isVisible={isModalVisible}>
          <ButtonComp label="hideModal" onPress={handleModal} />
        </ModalComp>
      </ScrollView>
    </View>
  );
};

export default ModalScreen;
