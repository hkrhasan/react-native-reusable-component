import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  ButtonComp,
  HeaderComp,
  InputComp,
  ImageUploader,
  DropDownSingleSelect,
  DropDownMultiSelect,
  RadioButtonsComp,
  DatePickerComp,
  CheckBoxesComp,
} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {buttons} from '../../utils/componentObjects/RadioButtons/constant';

const height = Dimensions.get('window').height;

const FormScreen = ({navigation}) => {
  const [name, setName] = useState({
    value: '',
    error: '',
  });
  const [phone, setPhone] = useState({
    value: '',
    error: '',
  });
  const [imagePath, setImagePath] = useState({});
  const [value, setValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  const [about, setAbout] = useState('');
  const [states, setStates] = useState([
    {label: 'Delhi', value: 'delhi'},
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Punjab', value: 'Punjab'},
  ]);
  const [country, setCountry] = useState([
    {label: 'India', value: 'india'},
    {label: 'China', value: 'china'},
    {label: 'Pakistan', value: 'pakistan'},
    {label: 'USA', value: 'usa'},
  ]);

  const [radios, setRadios] = useState([
    {id: 1, label: 'Male', selected: false},
    {id: 2, label: 'Female', selected: false},
    {id: 3, label: 'Others', selected: false},
  ]);

  const [date, setDate] = useState(new Date());
  const [checklistStack, setChacklistStack] = useState([
    {title: 'I agree', checked: false},
  ]);

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
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{paddingVertical: 10, minHeight: height - 60}}>
          <View
            style={{
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageUploader imagePath={imagePath} setImagePath={setImagePath} />
            <ButtonComp
              label="Edit"
              variant="text"
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
              }}
            />
          </View>

          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Name</Text>
            <InputComp
              value={name.value}
              setValue={text => setName({...name, value: text})}
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Phone</Text>
            <InputComp
              value={phone.value}
              setValue={text => setPhone({...phone, text})}
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Select country</Text>
            <DropDownSingleSelect
              value={value}
              setValue={setValue}
              items={country}
              setItems={setCountry}
              searchable={true}
              zIndex={10}
              style={{marginBottom: 10}}
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Select states</Text>
            <DropDownMultiSelect
              value={multiValue}
              setValue={setMultiValue}
              items={states}
              setItems={setStates}
              min={0}
              max={5}
              itemKey={'value'}
              mode="BADGE"
              searchable={true}
              zIndex={9}
            />
          </View>

          <View style={[styles.horizontalPadding, {marginTop: 7}]}>
            <Text style={styles.heading}>Gender</Text>
            <RadioButtonsComp
              styleWrapper={{alignItems: 'flex-start'}}
              styleBtnWrapper={{flex: 0}}
              buttons={radios}
              setButtons={setRadios}
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>DOB</Text>
            <DatePickerComp date={date} setDate={setDate} />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>About Us</Text>
            <InputComp
              value={about}
              setValue={setAbout}
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              editable
            />
          </View>
          <View style={styles.horizontalPadding}>
            <CheckBoxesComp
              list={checklistStack}
              setList={setChacklistStack}
              styleWrapper={{alignItems: 'flex-start'}}
              btnWrapper={{flex: 0}}
            />
          </View>

          <View
            style={[
              styles.horizontalPadding,
              {
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <ButtonComp
              label="Reset"
              variant="outlined"
              size="small"
              containerStyle={{marginBottom: 10, width: '45%'}}
            />
            <ButtonComp
              size="small"
              label="Submit"
              containerStyle={{marginBottom: 10, width: '45%'}}
            />
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  heading: {fontSize: 16, fontWeight: '600', marginBottom: 10, marginTop: 10},
  smallHead: {
    fontSize: 14,
    color: colors.black,
  },
  horizontalPadding: {
    paddingHorizontal: 12,
  },
});
