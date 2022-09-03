import colors from '../../../style/colors';

const DropDownSingleSelectStyle = {
  wrapper: {
    position: 'relative',
    // height: 59,
    zIndex: 10,
  },
  row: {
    common: {
      borderRadius: 10,
      paddingHorizontal: 7,
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.primary,
      borderWidth: 1,
      backgroundColor: colors.white,
      position: 'absolute',
      top: 0,
      left: 0,
      height: 59,
    },
    focused: {
      borderWidth: 2,
    },
    error: {
      container: {
        borderColor: colors.error,
      },
      icon: {
        color: colors.error,
      },
      input: {
        color: colors.error,
      },
      placeHolderTextColor: colors.error,
    },
    icon: {
      fontSize: 20,
      color: colors.primary,
    },
    input: {
      fontSize: 14,
      color: colors.primary,
      flex: 1,
    },
    placeHolderTextColor: colors.secondary,
  },
  flatList: {
    display: 'flex',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -40,
    zIndex: 1000,
  },
  error: {
    text: {
      color: colors.error,
      fontSize: 12,
      marginLeft: 5,
    },
  },
};

export default DropDownSingleSelectStyle;
