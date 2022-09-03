import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BottomNavStyle from '../../utils/componentObjects/BottomNav/style';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {
    item,
    onPress,
    accessibilityState,
    showLabel,
    tabBtnContainerStyle,
    activeIconStyle,
    inActiveIconStyle,
    iconPosition,
    tabBtnStyleLabel,
  } = props;
  const focused = accessibilityState.selected;

  let flexDirection = 'column';

  if (iconPosition === 'bottom') {
    flexDirection = 'column-reverse';
  }

  if (iconPosition === 'left') {
    flexDirection = 'row';
  }

  if (iconPosition === 'right') {
    flexDirection = 'row-reverse';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...BottomNavStyle.tabButton.container,
        ...tabBtnContainerStyle,
      }}>
      <View
        style={{
          ...BottomNavStyle.tabButton.container,
          ...tabBtnContainerStyle,
          flexDirection,
        }}>
        {focused
          ? item.activeIcon({
              ...BottomNavStyle.tabButton.icon.common,
              ...BottomNavStyle.tabButton.icon.active,
              ...activeIconStyle,
            })
          : item.inActiveIcon({
              ...BottomNavStyle.tabButton.icon.common,
              ...BottomNavStyle.tabButton.icon.inActive,
              ...inActiveIconStyle,
            })}

        {showLabel && (
          <Text
            style={{
              ...BottomNavStyle.tabButton.label.common,
              color: focused
                ? BottomNavStyle.tabButton.label.active.color
                : BottomNavStyle.tabButton.label.inActive.color,
              marginRight: flexDirection === 'row-reverse' ? 7 : 0,
              marginLeft: flexDirection === 'row' ? 7 : 0,
              ...tabBtnStyleLabel,
            }}>
            {item.label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const BottomNav = props => {
  const {
    TabArr,
    headerShown,
    tabBarStyle,
    showLabel,
    tabBtnContainerStyle,
    activeIconStyle,
    inActiveIconStyle,
    iconPosition,
    tabBtnStyleLabel,
  } = props;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: headerShown,
        tabBarStyle: {
          ...BottomNavStyle.navContainer,
          ...tabBarStyle,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton
                  {...props}
                  item={item}
                  showLabel={showLabel}
                  tabBtnContainerStyle={tabBtnContainerStyle}
                  activeIconStyle={activeIconStyle}
                  inActiveIconStyle={inActiveIconStyle}
                  iconPosition={iconPosition}
                  tabBtnStyleLabel={tabBtnStyleLabel}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomNav;
