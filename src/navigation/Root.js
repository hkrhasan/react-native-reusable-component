import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';
import {
  ButtonScreen,
  StartIconScreen,
  EndIconScreen,
  SubMenuFirstScreen,
  SubMenuSecondScreen,
  InputScreen,
  AutoCompleteScreen,
  DropDownsScreen,
  RadioCheckBox,
  TabBarScreen,
  DatePickerScreen,
  ModalScreen,
  ActionSheetScreen,
  FormScreen,
  TestScreen,
  FormScreenOnChange,
} from '../screens';

const Drawer = createDrawerNavigator();

const DummyScreen = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Form"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Buttons" component={ButtonScreen} />
        <Drawer.Screen name="TabBar" component={TabBarScreen} />
        <Drawer.Screen name="Inputs" component={InputScreen} />
        <Drawer.Screen name="Dropdown" component={DropDownsScreen} />
        <Drawer.Screen name="AutoComplete" component={AutoCompleteScreen} />
        <Drawer.Screen name="RadioCheckBoxes" component={RadioCheckBox} />
        <Drawer.Screen name="DatePickers" component={DatePickerScreen} />
        <Drawer.Screen name="Modal" component={ModalScreen} />
        <Drawer.Screen name="ActionSheet" component={ActionSheetScreen} />
        <Drawer.Screen name="Form" component={FormScreen} />
        <Drawer.Screen name="Form2" component={FormScreenOnChange} />
        {/* <Drawer.Screen name="StartIcon" component={StartIconScreen} />
        <Drawer.Screen name="EndIcon" component={EndIconScreen} />
        <Drawer.Screen name="SubMenuFirst" component={SubMenuFirstScreen} />
        <Drawer.Screen name="SubMenuSecond" component={SubMenuSecondScreen} /> */}
        {/* 
        <Drawer.Screen name="Help">
          {() => <DummyScreen name={'Help'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={'Settings'} />}
        </Drawer.Screen> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
