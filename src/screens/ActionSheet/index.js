import React, {useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ActionSheetComp} from '../../components';

const ActionSheetScreen = () => {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const snapPoints = ['25%', '50%', '90%'];

  // callbacks
  const handleSheetChange = index => {};
  const handleSnapPress = index => {
    sheetRef.current?.snapToIndex(index);
  };
  const handleClosePress = () => {
    sheetRef.current?.close();
  };

  // render
  return (
    <View style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <ActionSheetComp
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        handleSheetChange={handleSheetChange}>
        <Text>Awesome 🔥</Text>
      </ActionSheetComp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});

export default ActionSheetScreen;
