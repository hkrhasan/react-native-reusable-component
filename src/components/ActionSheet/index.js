import React from 'react';
// import {BottomSheet} from '@rneui/themed';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const ActionSheetComp = props => {
  const {sheetRef, snapPoints, handleSheetChange, styleSheet, children} = props;
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      style={styleSheet}
      enablePanDownToClose
      {...props}>
      <BottomSheetScrollView contentContainerStyle={{flex: 1}}>
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default ActionSheetComp;

// const ActionSheetComp = props => {
//   const {children} = props;
//   return <BottomSheet {...props}>{children}</BottomSheet>;
// };

// export default ActionSheetComp;
