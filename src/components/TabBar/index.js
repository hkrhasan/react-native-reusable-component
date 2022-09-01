import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../style/colors';
import TabBody from './TabBody';
import TabBarStyle from '../../utils/componentObjects/TabBar/style';

const TabButton = props => {
  const {item, isActive, onPress, iconPosition} = props;

  const flexDirection = iconPosition
    ? iconPosition === 'bottom'
      ? 'column-reverse'
      : iconPosition === 'left'
      ? 'row'
      : 'row-reverse'
    : 'column';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...TabBarStyle.tabButton.wrapper}}>
      <View
        style={{
          ...TabBarStyle.tabButton.rowOrColumn,
          flexDirection,
        }}>
        {isActive
          ? item.activeIcon({
              ...TabBarStyle.tabButton.icon.common,
              ...TabBarStyle.tabButton.icon.active,
            })
          : item.inActiveIcon({
              ...TabBarStyle.tabButton.icon.common,
              ...TabBarStyle.tabButton.icon.inActive,
            })}
        <Text
          style={{
            ...TabBarStyle.tabButton.text.common,
            color: isActive
              ? TabBarStyle.tabButton.text.active.color
              : TabBarStyle.tabButton.text.inActive.color,
            marginRight: flexDirection === 'row-reverse' ? 7 : 0,
            marginLeft: flexDirection === 'row' ? 7 : 0,
          }}>
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TabBarComp = ({TabArr, iconPosition, ...props}) => {
  const [active, setActive] = useState(TabArr.length ? TabArr[0] : undefined);

  const Component = active ? active.component : null;

  return (
    <View style={{...TabBarStyle.wrapper}}>
      <View
        style={{
          ...TabBarStyle.row,
        }}>
        {TabArr?.map((item, index) => (
          <TabButton
            key={index}
            item={item}
            isActive={active !== undefined && item.route === active.route}
            onPress={() => setActive(item)}
            iconPosition={iconPosition}
          />
        ))}
      </View>
      {Component ? (
        <Component />
      ) : (
        <TabBody style={{backgroundColor: 'red'}}>
          <Text>{active.label}</Text>
        </TabBody>
      )}
    </View>
  );
};

export default TabBarComp;

export {TabBody};
