import colors from '../../../style/colors';

const InputStyle = {
  wrapper: {},
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
      label: {
        color: colors.error,
      },
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
    label: {
      fontSize: 14,
      color: colors.black,
      marginBottom: 10,
    },
    placeHolderTextColor: colors.secondary,
  },
  error: {
    text: {
      color: colors.error,
      fontSize: 12,
      marginLeft: 5,
    },
  },
};

export default InputStyle;
