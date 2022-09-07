import colors from '../../../style/colors';

const CheckBoxesStyle = {
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
    flex: 1,
  },
  btnOuter: {
    height: 20,
    width: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    // padding: 5,
  },
  btnInner: {
    borderRadius: 50,
    backgroundColor: colors.primary,
    height: 11,
    width: 11,
  },
  btnTitle: {
    fontSize: 14,
    color: colors.primary,
  },
};

export default CheckBoxesStyle;
