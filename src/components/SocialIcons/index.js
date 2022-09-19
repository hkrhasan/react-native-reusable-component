/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SocialIcon} from 'react-native-elements';

const SocialIconsComp = props => {
  const {flatListProps, data} = props;

  return (
    <FlatList
      {...flatListProps}
      data={data}
      keyExtractor={({item, index}) => index}
      renderItem={({item, index}) => {
        console.log(item);
        return <SocialIcon {...item} />;
      }}
    />
  );
};

export default SocialIconsComp;
