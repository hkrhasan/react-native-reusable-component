import colors from '../../../style/colors';

const TabBarStyle = {
  indicatorStyle: {
    backgroundColor: colors.white,
    height: 3,
  },
  containerStyle: {
    backgroundColor: colors.primary,
  },
  tabItemContainerStyle: active => {
    if (active) {
      return {
        backgroundColor: colors.error,
      };
    } else {
      return {};
    }
  },
  titleStyle: {
    fontSize: 12,
    color: colors.white,
  },
  tabViewStyle: {
    backgroundColor: colors.warning,
    width: '100%',
  },
  tabBodyStyle: {
    fontSize: 30,
    color: colors.primary,
  },
};

export default TabBarStyle;
