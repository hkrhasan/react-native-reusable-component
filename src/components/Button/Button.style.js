import colors from '../../style/colors';

export const btnSize = {
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  large: {
    fontSize: 22,
  },
};

const paddingHorizontal = 12;
const paddingVertical = 14;

const ButtonStyle = {
  primary: {
    text: {
      container: {
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: colors.white,
      },
      text: {
        color: colors.primary,
      },
    },
    contained: {
      container: {
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
      },
      text: {
        color: colors.white,
      },
    },
    outlined: {
      container: {
        borderWidth: 2,
        borderColor: colors.primary,
      },
      text: {
        color: colors.primary,
      },
    },
  },
  secondary: {
    text: {
      container: {
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: colors.white,
      },
      text: {
        color: colors.secondary,
      },
    },
    contained: {
      container: {
        borderWidth: 2,
        borderColor: colors.secondary,
        backgroundColor: colors.secondary,
      },
      text: {
        color: colors.white,
      },
    },
    outlined: {
      container: {
        borderWidth: 2,
        borderColor: colors.secondary,
      },
      text: {
        color: colors.secondary,
      },
    },
  },
  success: {
    text: {
      container: {
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: colors.white,
      },
      text: {
        color: colors.success,
      },
    },
    contained: {
      container: {
        borderWidth: 2,
        borderColor: colors.success,
        backgroundColor: colors.success,
      },
      text: {
        color: colors.white,
      },
    },
    outlined: {
      container: {
        borderWidth: 2,
        borderColor: colors.success,
      },
      text: {
        color: colors.success,
      },
    },
  },
  warning: {
    text: {
      container: {
        borderWidth: 2,
        borderColor: colors.white,
        backgroundColor: colors.white,
      },
      text: {
        color: colors.warning,
      },
    },
    contained: {
      container: {
        borderWidth: 2,
        borderColor: colors.warning,
        backgroundColor: colors.warning,
      },
      text: {
        color: colors.white,
      },
    },
    outlined: {
      container: {
        borderWidth: 2,
        borderColor: colors.warning,
      },
      text: {
        color: colors.warning,
      },
    },
  },
  error: {
    text: {
      container: {
        borderColor: colors.white,
        borderWidth: 2,
        backgroundColor: colors.white,
      },
      text: {
        color: colors.error,
      },
    },
    contained: {
      container: {
        borderColor: colors.error,
        borderWidth: 2,
        backgroundColor: colors.error,
      },
      text: {
        color: colors.white,
      },
    },
    outlined: {
      container: {
        borderColor: colors.error,
        borderWidth: 2,
      },
      text: {
        color: colors.error,
      },
    },
  },
  disabled: {
    text: {
      container: {
        borderColor: colors.white,
        borderWidth: 2,
        backgroundColor: colors.white,
        cursor: 'not-allowed',
      },
      text: {
        color: colors.primary,
      },
    },
    contained: {
      container: {
        borderColor: colors.disable,
        borderWidth: 2,
        backgroundColor: colors.disable,
        cursor: 'not-allowed',
      },
      text: {
        color: colors.secondary,
      },
    },
    outlined: {
      container: {
        borderWidth: 2,
        borderColor: colors.disable,
        cursor: 'not-allowed',
      },
      text: {
        color: colors.secondary,
      },
    },
  },
};

export default ButtonStyle;
