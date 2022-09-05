/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonComp, HeaderComp, InputComp} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const FormScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onPress = () => {
    console.warn('Clicked');
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <HeaderComp
        title="Form"
        barIcon={style => (
          <OpenDrawer style={style} onPress={() => navigation.openDrawer()} />
        )}
        userImage={imgUri}
      />
      <ScrollView
        contentContainerStyle={{
          // paddingHorizontal: 12,
          paddingVertical: 12,
          flex: 1,
        }}>
        <View
          style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: colors.primary,
            }}
          />
          <ButtonComp
            label="Edit"
            variant="text"
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
            }}
          />
          {/* <Text
            style={{
              fontSize: 20,
              fontweigth: '600',
              color: colors.primary,
              marginTop: 10,
            }}>
            Edit
          </Text> */}
        </View>

        <View
          style={{
            paddingHorizontal: 12,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 10}}>
            Name
          </Text>
          <InputComp value={name} setValue={setName} />
        </View>
        <View
          style={{
            paddingHorizontal: 12,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 10}}>
            Phone
          </Text>
          <InputComp value={phone} setValue={setPhone} />
        </View>
        <View
          style={{
            paddingHorizontal: 12,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 10}}>
            Phone
          </Text>
          <InputComp value={phone} setValue={setPhone} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.black,
    marginBottom: 7,
  },
  smallHead: {
    fontSize: 14,
    color: colors.black,
  },
});
