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
import React, {Fragment, useState, useRef, useEffect} from 'react';
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
  ModalComp,
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
  const [scrollOffset, setScrollOffset] = useState(null);
  const [actionSheetIsOpened, setActionSheetIsOpened] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const onChange = (obj, field, value) => {
    setAllStates(pre => {
      const currObj = {...pre[obj], [field]: value};
      const fullState = {...pre, [obj]: currObj};

      return fullState;
    });
  };

  // =========================: Image Upload Conf :============================
  const imageSheetRef = useRef(null);
  const [launchType, setLaunchType] = useState(null);
  const onChangeImageSheet = index => {
    if (index === -1) {
      setActionSheetIsOpened(false);
    }
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

  // =========================: Start Submit Sheet Conf :============================

  const submitSheetRef = useRef(null);
  const onChangeSubmitSheet = index => {
    if (index === -1) {
      setActionSheetIsOpened(false);
    }
  };

  const openSubmitSheet = index => {
    setActionSheetIsOpened(false);
    submitSheetRef.current?.snapToIndex(index);
  };

  const closeSubmitSheet = () => {
    submitSheetRef.current?.close();
  };

  const onSubmit = () => {
    const {
      about,
      agePicker,
      checks,
      country,
      date,
      firstName,
      imageUpload,
      name,
      phone,
      quantity,
      radios,
      slider,
      state,
    } = allStates || {};

    const errors = [];

    // validate values
    if (!firstName.value) {
      onChange('firstName', 'error', 'firstName is required');
      errors.push('firstName');
    }
    if (!name.value) {
      onChange('name', 'error', 'name is required');
      errors.push('name');
    }

    if (!agePicker.age) {
      onChange('agePicker', 'error', 'age is required');
      errors.push('agePicker');
    }
    if (!about.value) {
      onChange('about', 'error', 'about is required');
      errors.push('about');
    }
    if (!date.value) {
      onChange('date', 'error', 'date is required');
      errors.push('date');
    }
    if (!country.value) {
      onChange('country', 'error', 'country is required');
      errors.push('value');
    }
    if (!phone.value) {
      onChange('phone', 'error', 'phone is required');
      errors.push('phone');
    }
    if (!quantity.value) {
      onChange('quantity', 'error', 'quantity is required');
      errors.push('quantity');
    }
    if (!slider.sliderValue.value) {
      onChange('slider', 'error', 'slider is required');
      errors.push('slider');
    }
    if (!state.values.length) {
      onChange('state', 'error', 'state is required');
      errors.push('state');
    }

    if (!errors.length) {
      openSubmitSheet(0);
    }
  };

  const onReset = () => {
    console.log('reset click');
    setAllStates(defaultState);
  };

  useEffect(() => {
    onChange('state', 'values', multiSelected);
  }, [multiSelected]);

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
              error={allStates.firstName.error}
            />
          </View>
          {/* ============: firstname field end :=============== */}

          {/* ============: Age field start :=============== */}
          <View style={styles.horizontalPadding}>
            {allStates.agePicker.label && (
              <Text
                style={[
                  styles.heading,
                  // {
                  //   color: allStates.agePicker.error
                  //     ? colors.error
                  //     : colors.black,
                  // },
                ]}>
                {allStates.agePicker.label}
              </Text>
            )}
            <Pressable
              onPress={() => openAgeSheet(0)}
              style={{
                borderWidth: 1,
                // borderColor: allStates.agePicker.error
                //   ? colors.error
                //   : colors.primary,
                borderRadius: 10,
                backgroundColor: colors.white,
                paddingVertical: 14,
                paddingHorizontal: 10,
              }}>
              <Text
                style={[
                  {
                    color: allStates.agePicker.error
                      ? colors.primary
                      : colors.black,
                  },
                ]}>
                {allStates.agePicker.age || allStates.agePicker.placeholder}
              </Text>
            </Pressable>
            {allStates?.agePicker?.error && (
              <Text style={[styles.error]}>{allStates?.agePicker?.error}</Text>
            )}
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
              error={allStates.phone.error}
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
              error={allStates.country.error}
            />
          </View>
          {/* ============: Country field end :=============== */}

          {/* ============: States field start :=============== */}
          <View style={styles.horizontalPadding}>
            <DropDownMultiSelect
              label={allStates.state.label}
              selectedValues={allStates.state.values}
              setSelectedValues={setMultiSelected}
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
              error={allStates.state.error}
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
              error={allStates.date.error}
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
              error={allStates.about.error}
              editable
            />
          </View>
          <View style={styles.horizontalPadding}>
            <Text style={[styles.heading]}>Range Slider</Text>
            <View>
              <SliderComp
                value={allStates.slider.sliderValue.value}
                setValue={v => onChange('slider', 'sliderValue', v)}
                animateTransitions={true}
                thumbTintColor={colors.secondary}
              />
              <Text>
                value: {parseInt(allStates.slider.sliderValue.value * 100)}
              </Text>
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
              onPress={onReset}
            />
            <ButtonComp
              size="small"
              label="Submit"
              containerStyle={{marginBottom: 10, width: '45%'}}
              onPress={onSubmit}
            />
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
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
              onPress={onSubmit}
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
          snapPoints={allStates.imageUpload.sheetSnap}
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
          snapPoints={allStates.agePicker.sheetSnap}
          handleSheetChange={onChangeAgeSheet}>
          <View
            style={[
              styles.horizontalPadding,
              {
                marginTop: 10,
              },
            ]}>
            {allStates.agePicker.ageArray.map(age => (
              <ButtonComp
                label={age}
                variant="outlined"
                size="small"
                onPress={() => {
                  onChange('agePicker', 'age', age);
                  closeAgeSheet();
                }}
                containerStyle={{marginBottom: 10}}
              />
            ))}
            {/* <ButtonComp label="Reset" containerStyle={{marginBottom: 10}} /> */}
          </View>
        </ActionSheetComp>
        {/* Age Sheet end */}

        {/* On Submit Action Sheet */}
        <ActionSheetComp
          style={{flex: 1, justifyContent: 'center'}}
          index={-1}
          sheetRef={submitSheetRef}
          snapPoints={['100%']}
          handleSheetChange={onChangeSubmitSheet}>
          <View
            style={[
              styles.horizontalPadding,
              {
                marginTop: 10,
              },
            ]}>
            <View style={{height: 400, padding: 10}}>
              <Text style={[styles.heading, {marginTop: 10}]}>
                Image states
              </Text>
              <Text>{JSON.stringify(allStates.imageUpload)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>name states</Text>
              <Text>{JSON.stringify(allStates.name)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                FirstName states
              </Text>
              <Text>{JSON.stringify(allStates.firstName)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                Phone states
              </Text>
              <Text>{JSON.stringify(allStates.phone)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>age states</Text>
              <Text>{JSON.stringify(allStates.agePicker)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>DOB states</Text>
              <Text>{JSON.stringify(allStates.date)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                Country states
              </Text>
              <Text>{JSON.stringify(allStates.country)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                States states
              </Text>
              <Text>{JSON.stringify(allStates.state)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                Quantity states
              </Text>
              <Text>{JSON.stringify(allStates.quantity)}</Text>
              <Text style={[styles.heading, {marginTop: 10}]}>
                checks states
              </Text>
              <Text>{JSON.stringify(allStates.checks)}</Text>
              <View style={{marginTop: 20}}>
                <ButtonComp label="close" onPress={closeSubmitSheet} />
              </View>
            </View>
          </View>
        </ActionSheetComp>
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
  error: {
    color: colors.error,
    fontSize: 12,
    marginLeft: 5,
  },
});
