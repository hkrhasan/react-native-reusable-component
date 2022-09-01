import colors from '../../../style/colors';

const BottomNavStyle = {
  navContainer: {
    height: 60,
  },
  tabButton: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      common: {
        fontSize: 24,
      },
      active: {
        color: colors.primary,
      },
      inActive: {
        color: colors.secondary,
      },
    },
    label: {
      common: {
        fontSize: 14,
      },
      active: {
        color: colors.primary,
      },
      inActive: {
        color: colors.secondary,
      },
    },
  },
};

export default BottomNavStyle;
