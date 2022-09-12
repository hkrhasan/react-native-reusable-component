/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
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
  SliderComp,
} from '../../components';
import OpenDrawer from '../../components/Header/OpenDrawer';
import colors from '../../style/colors';
import {imgUri} from '../../utils/componentObjects/MenuBar/constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {buttons} from '../../utils/componentObjects/RadioButtons/constant';
import {defaultState} from './defaultState';
const height = Dimensions.get('window').height;

const FormScreen = ({navigation}) => {
  const [allStates, setAllStates] = useState({...defaultState});

  const onChange = (obj, field, value) => {
    console.log(obj, field, value);
    setAllStates({...allStates, [obj]: {...allStates[obj], [field]: value}});
  };

  // =========================: Image Upload Conf :============================
  const [imagePath, setImagePath] = useState({});
  const imageSheetRef = useRef(null);
  const [launchType, setLaunchType] = useState(null);
  const [imageSnapPoints, setImageSnapPoints] = useState(['20%']);
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

  // =========================: Start Age Conf :============================
  const [age, setAge] = useState(undefined);
  const [ageSnapPoints, setAgeSnapPoints] = useState(['60%']);
  const ageSheetRef = useRef(null);
  const onChangeAgeSheet = index => {
    if (index === -1) {
      setActionSheetIsOpened(false);
    }
  };

  const openAgeSheet = index => {
    setActionSheetIsOpened(false);
    ageSheetRef.current?.snapToIndex(index);
  };

  const closeAgeSheet = () => {
    ageSheetRef.current?.close();
  };
  // =========================: End Age Conf :============================

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
  // =========================: Slider conf start :============================
  const [sliderValue, setSliderValue] = useState({value: 0.2});
  // =========================: Slider conf end :============================

  // =========================: CheckBox conf start :============================
  const [checklistStack, setChacklistStack] = useState([
    {title: 'I agree', checked: true},
    {title: 'I agree', checked: false},
  ]);
  // =========================: CheckBox conf end :============================
  // =========================: Start Other Conf :============================
  const [actionSheetIsOpened, setActionSheetIsOpened] = useState(false);
  // =========================: End Other Conf :============================

  console.log(multiValue);

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
              imagePath={allStates.imageUpload.imagePath}
              setImagePath={source =>
                onChange('imageUpload', 'imagePath', source)
              }
              onPress={() => openImageSheet(0)}
              launchType={launchType}
              setLaunchType={setLaunchType}
            />
          </View>
          {/* ============: image uploader end :=============== */}

          {/* ============: name field start :=============== */}

          <View style={[styles.horizontalPadding, {marginTop: 10}]}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {!allStates.name.edit ? (
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {allStates.name.value}
                </Text>
              ) : (
                <TextInput
                  value={allStates.name.value}
                  style={styles.nameInput}
                  onChangeText={value => onChange('name', 'value', value)}
                />
              )}
              <Pressable
                onPress={() => onChange('name', 'edit', !allStates.name.edit)}>
                {!allStates.name.edit ? (
                  <AntDesign
                    name="edit"
                    style={{fontSize: 20, marginLeft: 7}}
                  />
                ) : (
                  <Entypo name="check" style={{fontSize: 20, marginLeft: 7}} />
                )}
              </Pressable>
            </View>
          </View>
          {/* ============: name field end :=============== */}

          {/* ============: firstname field start :=============== */}
          <View style={styles.horizontalPadding}>
            <InputComp
              label={allStates.firstName.label}
              value={allStates.firstName.value}
              setValue={text => onChange('firstName', 'value', text)}
              minLength={allStates.firstName.minLength}
              maxLength={allStates.firstName.maxLength}
            />
          </View>
          {/* ============: firstname field end :=============== */}

          {/* ============: Age field start :=============== */}
          <View style={styles.horizontalPadding}>
            {allStates.agePicker.label && (
              <Text style={styles.heading}>{allStates.agePicker.label}</Text>
            )}
            <Pressable
              onPress={() => openAgeSheet(0)}
              style={{
                borderWidth: 1,
                borderColor: colors.primary,
                borderRadius: 10,
                backgroundColor: colors.white,
                paddingVertical: 14,
                paddingHorizontal: 10,
              }}>
              <Text>
                {allStates.agePicker.age || allStates.agePicker.placeholder}
              </Text>
            </Pressable>
          </View>
          {/* ============: Age field end :=============== */}

          {/* ============: Phone field start :=============== */}
          <View style={styles.horizontalPadding}>
            {/* <Text style={styles.heading}>Phone</Text> */}
            <PhoneInput
              label={allStates.phone.label}
              value={allStates.phone.value}
              setValue={text => onChange('phone', 'value', text)}
              length={allStates.phone.length}
            />
          </View>
          {/* ============: Phone field end :=============== */}

          {/* ============: Country field start :=============== */}
          <View style={styles.horizontalPadding}>
            <DropDownSingleSelect
              label={allStates.country.label}
              value={allStates.country.value}
              setValue={country => {
                onChange('country', 'value', country());
              }}
              items={allStates.country.data}
              setItems={items => {
                onChange('country', 'data', items);
              }}
              searchable={true}
              zIndex={actionSheetIsOpened ? 0 : allStates.country.zIndex}
              style={{marginBottom: 10}}
            />
          </View>
          {/* ============: Country field end :=============== */}

          {/* ============: States field start :=============== */}
          <View style={styles.horizontalPadding}>
            <DropDownMultiSelect
              value={multiValue}
              label={allStates.state.label}
              setValue={setMultiValue}
              items={allStates.state.data}
              setItems={data => {
                onChange('state', 'data', data);
              }}
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
            <RadioButtonsComp
              label={allStates.radios.label}
              styleWrapper={{alignItems: 'flex-start'}}
              styleBtnWrapper={{flex: 0}}
              buttons={allStates.radios.data}
              setButtons={btns => onChange('radios', 'data', btns)}
            />
          </View>
          {/* ==========================: Radio Buttons end :======================== */}

          {/* ==========================: PlusMinus Buttons start :======================== */}
          <View style={[styles.horizontalPadding, {marginTop: 7}]}>
            <PlusMinusButton
              label={allStates.quantity.label}
              min={allStates.quantity.min}
              max={allStates.quantity.max}
              quantity={allStates.quantity.value}
              setQuantity={q => onChange('quantity', 'value', q)}
            />
          </View>
          {/* ==========================: PlusMinus Buttons end :======================== */}

          <View style={styles.horizontalPadding}>
            <DatePickerComp
              label={allStates.date.label}
              date={allStates.date.value}
              setDate={d => onChange('date', 'value', d)}
              dateFormat={allStates.date.dateFormat}
              placeholder={allStates.date.placeholder}
            />
          </View>
          <View style={styles.horizontalPadding}>
            <InputComp
              label={allStates.about.label}
              value={allStates.about.value}
              setValue={v => onChange('about', 'value', v)}
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              editable
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={[styles.heading]}>Range Slider</Text>
            <View>
              <SliderComp
                value={sliderValue.value}
                setValue={setSliderValue}
                animateTransitions={true}
                thumbTintColor={colors.secondary}
              />
              <Text>value: {parseInt(sliderValue.value * 100)}</Text>
            </View>
          </View>
          <View style={styles.horizontalPadding}>
            <CheckBoxesComp
              list={allStates.checks.data}
              setList={d => onChange('checks', 'data', d)}
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
        {/* Image Sheet start */}
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
              label="Gallery"
              onPress={() => {
                setLaunchType('gallery');
                closeImageSheet();
              }}
              containerStyle={{marginBottom: 10, width: '45%'}}
            />
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
          </View>
        </ActionSheetComp>
        {/* Image Sheet end */}

        {/* Age Sheet start */}
        <ActionSheetComp
          style={{flex: 1, justifyContent: 'center'}}
          index={-1}
          sheetRef={ageSheetRef}
          snapPoints={ageSnapPoints}
          handleSheetChange={onChangeAgeSheet}>
          <View
            style={[
              styles.horizontalPadding,
              {
                marginTop: 10,
              },
            ]}>
            {[20, 30, 40, 50, 60, 70].map(age => (
              <ButtonComp
                label={age}
                variant="outlined"
                size="small"
                onPress={() => {
                  setAge(age);
                  closeAgeSheet();
                }}
                containerStyle={{marginBottom: 10}}
              />
            ))}
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
          </View>
        </ActionSheetComp>
        {/* Age Sheet end */}
        {/* ==========================: ActionSheets Renders :======================== */}
      </ScrollView>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  heading: {fontSize: 14, marginBottom: 10, color: colors.black},
  smallHead: {
    fontSize: 14,
    color: colors.black,
  },
  horizontalPadding: {
    paddingHorizontal: 12,
    marginBottom: 7,
  },
  nameInput: {
    fontSize: 14,
    color: colors.primary,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 0,
  },
});
