import colors from '../../../style/colors';

const MenuBarStyle = {
  container: {
    position: 'relative',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  text: {
    fontSize: 18,
  },
  accordian: {
    position: 'absolute',
    right: 14,
    top: '50%',
  },
  activeBackGround: colors.primary,
  inActiveBackGround: colors.white,
  activeText: colors.white,
  inActiveText: colors.primary,
};

export default MenuBarStyle;
