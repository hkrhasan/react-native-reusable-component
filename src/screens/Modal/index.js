/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Button, Text} from 'react-native';
import React from 'react';
import {ButtonComp, HeaderComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {Modal} from '../../components/Modal';

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
        <Modal isVisible={isModalVisible}>
          <ButtonComp label="hideModal" onPress={handleModal} />
        </Modal>
      </ScrollView>
    </View>
  );
};

export default ModalScreen;
