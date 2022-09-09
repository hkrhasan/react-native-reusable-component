/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {Fragment, useState, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
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
  ActionSheetComp,
  PhoneInput,
  PlusMinusButton,
} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {buttons} from '../../utils/componentObjects/RadioButtons/constant';

const height = Dimensions.get('window').height;

const FormScreen = ({navigation}) => {
  // =========================: Image Upload Conf :============================
  const [imagePath, setImagePath] = useState({});
  const imageSheetRef = useRef(null);
  const [launchType, setLaunchType] = useState(null);
  const imageSnapPoints = ['20%'];
  const onChangeImageSheet = index => {
    if (index === -1) {
      setActionSheetIsOpened(false);
    }
    console.log('handleSheetChange', index);
  };
  const openImageSheet = index => {
    setActionSheetIsOpened(false);
    imageSheetRef.current?.snapToIndex(index);
  };
  const closeImageSheet = () => {
    imageSheetRef.current?.close();
  };
  // =========================: End Image Upload Conf :============================

  // =========================: Name conf Start :============================
  const [name, setName] = useState({
    value: 'hkrhasan',
    error: '',
    edit: false,
  });
  // =========================: Name conf End :============================
  // =========================: FirstName conf Start :============================
  const [firstName, setFirstName] = useState({
    value: '',
    error: '',
  });
  // =========================: FirstName conf End :============================

  // =========================: Phone conf Start :============================
  const phoneRef = useRef(null);
  const [phone, setPhone] = useState({
    value: '',
    error: '',
    ref: useRef(null),
  });
  // =========================: Phone conf End :============================

  // =========================: Country conf start :============================
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState([
    {label: 'India', value: 'india'},
    {label: 'China', value: 'china'},
    {label: 'Pakistan', value: 'pakistan'},
    {label: 'USA', value: 'usa'},
  ]);

  // =========================: Country conf end :============================
  // =========================: State conf start :============================
  const [multiValue, setMultiValue] = useState([]);
  const [states, setStates] = useState([
    {label: 'Delhi', value: 'delhi'},
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Punjab', value: 'Punjab'},
  ]);
  // =========================: State conf end :============================

  // =========================: About conf start :============================
  const [about, setAbout] = useState('');
  // =========================: About conf end :============================

  // =========================: Radios conf start :============================
  const [radios, setRadios] = useState([
    {id: 1, label: 'Male', selected: true},
    {id: 2, label: 'Female', selected: false},
    {id: 3, label: 'Others', selected: false},
  ]);
  // =========================: Radios conf end :============================
  // =========================: Quantity conf start :============================
  const [quantity, setQuantity] = useState(0);
  // =========================: Quantity conf end :============================

  // =========================: Date Picker conf start :============================
  const [date, setDate] = useState(new Date());
  // =========================: Date Picker conf end :============================

  // =========================: CheckBox conf start :============================
  const [checklistStack, setChacklistStack] = useState([
    {title: 'I agree', checked: true},
    {title: 'I agree', checked: false},
  ]);
  // =========================: CheckBox conf end :============================
  // =========================: Start Other Conf :============================
  const [actionSheetIsOpened, setActionSheetIsOpened] = useState(false);
  // =========================: End Other Conf :============================

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
          flex: 1,
        }}>
        <KeyboardAwareScrollView contentContainerStyle={{paddingVertical: 10}}>
          {/* ============: image uploader start :=============== */}
          <View
            style={{
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageUploader
              imagePath={imagePath}
              setImagePath={setImagePath}
              onPress={() => openImageSheet(0)}
              launchType={launchType}
              setLaunchType={setLaunchType}
            />
          </View>
          {/* ============: image uploader end :=============== */}

          {/* ============: name field start :=============== */}

          <View style={[styles.horizontalPadding, {marginTop: 10}]}>
            {!name.edit ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  @{name.value}
                </Text>
                <Pressable
                  onPress={() =>
                    setName({...name, edit: !name.edit, value: ''})
                  }>
                  <AntDesign
                    name="edit"
                    style={{fontSize: 20, marginLeft: 7}}
                  />
                </Pressable>
              </View>
            ) : (
              <Fragment>
                <Text style={styles.heading}>name</Text>
                <InputComp
                  value={name.value}
                  setValue={text => setName({...name, value: text})}
                  endIcon={style => (
                    <Pressable
                      onPress={() => {
                        if (!name.value) {
                          setName({...name, error: 'Name is required'});
                        } else {
                          setName({...name, edit: false});
                        }
                      }}>
                      <Entypo name="check" style={style} />
                    </Pressable>
                  )}
                  error={name.error}
                />
              </Fragment>
            )}
          </View>
          {/* ============: name field end :=============== */}

          {/* ============: firstname field start :=============== */}
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>FirstName</Text>
            <InputComp
              value={firstName.value}
              setValue={text => setFirstName({...firstName, value: text})}
              onSubmitEditing={() => {
                console.warn('on submit');
              }}
              blurOnSubmit={false}
            />
          </View>
          {/* ============: firstname field end :=============== */}

          {/* ============: Phone field start :=============== */}
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Phone</Text>
            <PhoneInput
              value={phone.value}
              setValue={text => setPhone({...phone, value: text})}
              ref={phoneRef}
            />
          </View>
          {/* ============: Phone field end :=============== */}

          {/* ============: Country field start :=============== */}
          <View style={styles.horizontalPadding}>
            <Text style={styles.heading}>Select country</Text>
            <DropDownSingleSelect
              value={value}
              setValue={setValue}
              items={country}
              setItems={setCountry}
              searchable={true}
              zIndex={actionSheetIsOpened ? 0 : 10}
              style={{marginBottom: 10}}
            />
          </View>
          {/* ============: Country field end :=============== */}

          {/* ============: States field start :=============== */}
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
              zIndex={actionSheetIsOpened ? 0 : 9}
            />
          </View>
          {/* ============: States field start :=============== */}
          {/* ==========================: Radio Buttons start :======================== */}
          <View style={[styles.horizontalPadding, {marginTop: 7}]}>
            <Text style={styles.heading}>Gender</Text>
            <RadioButtonsComp
              styleWrapper={{alignItems: 'flex-start'}}
              styleBtnWrapper={{flex: 0}}
              buttons={radios}
              setButtons={setRadios}
            />
          </View>
          {/* ==========================: Radio Buttons end :======================== */}

          {/* ==========================: PlusMinus Buttons start :======================== */}
          <View style={[styles.horizontalPadding, {marginTop: 7}]}>
            <Text style={styles.heading}>Quantity</Text>
            <PlusMinusButton quantity={quantity} setQuantity={setQuantity} />
          </View>
          {/* ==========================: PlusMinus Buttons end :======================== */}

          <View style={styles.horizontalPadding}>
            {/* label attach with component */}
            <Text style={styles.heading}>DOB</Text>
            <DatePickerComp
              date={date}
              setDate={setDate}
              dateFormat="dd-MMM-yyyy"
            />
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
        {/* ==========================: ActionSheets Renders :======================== */}
        <ActionSheetComp
          style={{flex: 1, justifyContent: 'center'}}
          index={-1}
          sheetRef={imageSheetRef}
          snapPoints={imageSnapPoints}
          handleSheetChange={onChangeImageSheet}>
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
              label="camera"
              variant="outlined"
              size="small"
              onPress={() => {
                setLaunchType('camera');
                closeImageSheet();
              }}
              containerStyle={{marginBottom: 10, width: '45%'}}
            />
            <ButtonComp
              size="gallery"
              label="Submit"
              onPress={() => {
                setLaunchType('gallery');
                closeImageSheet();
              }}
              containerStyle={{marginBottom: 10, width: '45%'}}
            />
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
          </View>
        </ActionSheetComp>
        {/* ==========================: ActionSheets Renders :======================== */}
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
