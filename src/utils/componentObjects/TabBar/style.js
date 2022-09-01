import colors from '../../../style/colors';

const TabBarStyle = {
  wrapper: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 60,
  },
  tabButton: {
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowOrColumn: {
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
    text: {
      common: {
        fontSize: 14,
      },
      active: {
        color: colors.primary,
      },
      inActive: colors.secondary,
    },
  },
};

export default TabBarStyle;
