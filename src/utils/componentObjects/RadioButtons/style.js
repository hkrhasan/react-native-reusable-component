import colors from '../../../style/colors';

const RadioButtonsStyle = {
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
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
  label: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 10,
  },
};

export default RadioButtonsStyle;
