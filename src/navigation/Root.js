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
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Buttons" component={ButtonScreen} />
        <Drawer.Screen name="StartIcon" component={StartIconScreen} />
        <Drawer.Screen name="EndIcon" component={EndIconScreen} />
        <Drawer.Screen name="SubMenuFirst" component={SubMenuFirstScreen} />
        <Drawer.Screen name="SubMenuSecond" component={SubMenuSecondScreen} />
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
