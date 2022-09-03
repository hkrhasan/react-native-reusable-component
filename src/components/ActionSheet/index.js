import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const ActionSheetComp = props => {
  const {sheetRef, snapPoints, handleSheetChange, styleSheet, children} = props;
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      style={[styleSheet]}
      enablePanDownToClose
      {...props}>
      {children}
    </BottomSheet>
  );
};

export default ActionSheetComp;
