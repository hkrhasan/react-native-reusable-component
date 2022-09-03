import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import MenuBarStyle from '../../utils/componentObjects/MenuBar/style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MenuBar = props => {
  const {
    label,
    startIcon,
    endIcon,
    endIconFullRight,
    parentProps,
    route,
    childs,
    activeRoute,
    styleContainer,
    stylePressable,
    dept,
  } = props;
  const [showChild, setShowChild] = useState(false);

  const menuDept = dept === undefined ? 2 : dept;

  const aRoute =
    parentProps?.navigation?.getState()?.routeNames[
      parentProps.navigation.getState().index
    ];

  const isActive = activeRoute === route;
  const color = isActive ? MenuBarStyle.activeText : MenuBarStyle.inActiveText;

  const onPress = () => {
    if (!route) {
      setShowChild(!showChild);
      return;
    }
    parentProps.navigation.navigate(route);
  };

  return (
    <View
      style={{
        ...MenuBarStyle.container,
        backgroundColor: isActive
          ? MenuBarStyle.activeBackGround
          : MenuBarStyle.inActiveBackGround,
        ...styleContainer,
      }}>
      <Pressable
        style={{
          ...MenuBarStyle.pressable,
          ...stylePressable,
          justifyContent: endIconFullRight ? 'space-between' : 'flex-start',
        }}
        onPress={onPress}>
        {/* startIcon */}
        {startIcon && startIcon({...MenuBarStyle.text, marginRight: 14, color})}
        {/* label */}
        <Text
          style={{
            ...MenuBarStyle.text,
            color,
          }}>
          {label}
        </Text>

        {/* endIcon */}
        {endIcon && endIcon({...MenuBarStyle.text, marginLeft: 14, color})}
        {endIconFullRight &&
          endIconFullRight({...MenuBarStyle.text, marginLeft: 14, color})}

        {/* accrodion */}
        {childs && (
          <SimpleLineIcons
            name={showChild ? 'arrow-up' : 'arrow-down'}
            style={{...MenuBarStyle.text, ...MenuBarStyle.accordian, color}}
          />
        )}
      </Pressable>
      {showChild &&
        childs &&
        childs?.map(menu => (
          <MenuBar
            key={menu.label}
            {...menu}
            parentProps={parentProps}
            activeRoute={aRoute}
            stylePressable={{
              paddingHorizontal:
                MenuBarStyle.pressable.paddingHorizontal * menuDept,
            }}
            dept={menuDept + 1}
          />
        ))}
    </View>
  );
};

export default MenuBar;
