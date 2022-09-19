import React, {useState} from 'react';
import {listAccordianStyle} from '../../utils/componentObjects/ListAccordian/style';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListAccordian = props => {
  const {
    data,
    title,
    toggleDownIcon,
    toggleUpIcon,
    styleMainRow,
    styleMainTitle,
    styleParentSeparator,
    styleFlatListContainer,
    styleToggleIcon,
    styleChildRow,
    styleSelectedChild,
    childEndIcon,
    childStartIcon,
    styleChildSeparator,
  } = props;
  const [isExpend, setIsExpend] = useState(false);
  const [list, setList] = useState(data);

  const onClick = index => {
    const temp = list.slice();
    temp[index].selected = !temp[index].selected;
    setList(temp);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpend(!isExpend);
  };

  return (
    <View>
      <TouchableOpacity
        style={[listAccordianStyle.row, styleMainRow]}
        onPress={() => toggleExpand()}>
        <Text style={[listAccordianStyle.title, styleMainTitle]}>{title}</Text>
        {!isExpend &&
          toggleDownIcon &&
          toggleDownIcon({...listAccordianStyle.rowIcon, ...styleToggleIcon})}
        {isExpend &&
          toggleUpIcon &&
          toggleUpIcon({...listAccordianStyle.rowIcon, ...styleToggleIcon})}
      </TouchableOpacity>
      <View style={[listAccordianStyle.parentHr, styleParentSeparator]} />
      {isExpend && (
        <View style={[styleFlatListContainer]}>
          <FlatList
            data={list}
            numColumns={1}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity
                  style={[listAccordianStyle.childRow, styleChildRow]}
                  onPress={() => onClick(index)}>
                  {childStartIcon &&
                    childStartIcon(listAccordianStyle.childEndIcon)}
                  <Text
                    style={[
                      listAccordianStyle.font,
                      item.selected ? styleSelectedChild : {},
                    ]}>
                    {item.key}
                  </Text>
                  {childEndIcon &&
                    childEndIcon(listAccordianStyle.childEndIcon)}
                </TouchableOpacity>
                <View
                  style={[listAccordianStyle.childHr, styleChildSeparator]}
                />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default ListAccordian;
