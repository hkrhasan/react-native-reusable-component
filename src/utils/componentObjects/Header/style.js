import colors from '../../../style/colors';

const HeaderStyle = {
  container: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: colors.white,
    flexDirection: 'row',
    shadowColor: colors.primary,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {width: 0, height: 6},
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barIcon: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    color: colors.primary,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  activeColor: colors.primary,
};

export default HeaderStyle;
