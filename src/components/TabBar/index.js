/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
// import React, {useState} from 'react';
// import colors from '../../style/colors';
// import TabBody from './TabBody';

// const TabButton = props => {
//   const {
//     item,
//     isActive,
//     onPress,
//     iconPosition,
//     styleTabBtnWrapper,
//     styleActiveIcon,
//     styleInActiveIcon,
//     styleTitle,
//   } = props;

//   let flexDirection = 'column';

//   if (iconPosition === 'bottom') {
//     flexDirection = 'column-reverse';
//   }

//   if (iconPosition === 'left') {
//     flexDirection = 'row';
//   }

//   if (iconPosition === 'right') {
//     flexDirection = 'row-reverse';
//   }

//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={{...TabBarStyle.tabButton.wrapper, styleTabBtnWrapper}}>
//       <View
//         style={{
//           ...TabBarStyle.tabButton.rowOrColumn,
//           flexDirection,
//         }}>
//         {isActive
//           ? item.activeIcon({
//               ...TabBarStyle.tabButton.icon.common,
//               ...TabBarStyle.tabButton.icon.active,
//               ...styleActiveIcon,
//             })
//           : item.inActiveIcon({
//               ...TabBarStyle.tabButton.icon.common,
//               ...TabBarStyle.tabButton.icon.inActive,
//               ...styleInActiveIcon,
//             })}
//         <Text
//           style={{
//             ...TabBarStyle.tabButton.text.common,
//             color: isActive
//               ? TabBarStyle.tabButton.text.active.color
//               : TabBarStyle.tabButton.text.inActive.color,
//             marginRight: flexDirection === 'row-reverse' ? 7 : 0,
//             marginLeft: flexDirection === 'row' ? 7 : 0,
//             ...styleTitle,
//           }}>
//           {item.label}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const TabBarComp = props => {
//   const {
//     TabArr,
//     iconPosition,
//     styleTabContainer,
//     styleTabrow,
//     styleTabBtnWrapper,
//     styleActiveIcon,
//     styleInActiveIcon,
//     styleTitle,
//   } = props;
//   const [active, setActive] = useState(TabArr.length ? TabArr[0] : undefined);

//   const Component = active ? active.component : null;

//   return (
//     <View style={{...TabBarStyle.wrapper, ...styleTabContainer}}>
//       <View
//         style={{
//           ...TabBarStyle.row,
//           ...styleTabrow,
//         }}>
//         {TabArr?.map((item, index) => (
//           <TabButton
//             key={index}
//             item={item}
//             isActive={active !== undefined && item.route === active.route}
//             onPress={() => setActive(item)}
//             styleTabBtnWrapper={styleTabBtnWrapper}
//             iconPosition={iconPosition}
//             styleActiveIcon={styleActiveIcon}
//             styleInActiveIcon={styleInActiveIcon}
//             styleTitle={styleTitle}
//           />
//         ))}
//       </View>
//       {Component ? (
//         <Component />
//       ) : (
//         <TabBody style={{backgroundColor: 'red'}}>
//           <Text>{active.label}</Text>
//         </TabBody>
//       )}
//     </View>
//   );
// };

// export default TabBarComp;

// export {TabBody};

import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import TabBarStyle from '../../utils/componentObjects/TabBar/style';

export default props => {
  const {
    containerStyle,
    titleStyle,
    tabViewStyle,
    indicatorStyle,
    tabItemContainerStyle,
    iconPosition,
    tabs,
  } = props;

  const [index, setIndex] = React.useState(0);

  const tabItemStyle = tabItemContainerStyle
    ? tabItemContainerStyle
    : TabBarStyle.tabItemContainerStyle;

  const tabItemIconPosition = iconPosition ? iconPosition : 'top';

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        containerStyle={[TabBarStyle.containerStyle, containerStyle]}
        indicatorStyle={[TabBarStyle.indicatorStyle, indicatorStyle]}>
        {tabs?.map((tab, key) => (
          <Tab.Item
            iconPosition={tabItemIconPosition}
            key={key}
            title={tab.title}
            containerStyle={tabItemStyle}
            titleStyle={[TabBarStyle.titleStyle, titleStyle]}
            icon={tab.icon}
          />
        ))}
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {tabs?.map((tab, key) => (
          <TabView.Item
            key={key}
            style={[TabBarStyle.tabViewStyle, tabViewStyle]}>
            {tab.body([TabBarStyle.styleTabBody])}
          </TabView.Item>
        ))}
      </TabView>
    </>
  );
};
