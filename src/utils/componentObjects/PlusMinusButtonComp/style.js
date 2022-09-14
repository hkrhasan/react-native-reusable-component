import colors from '../../../style/colors';

const PlusMinusStyle = {
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
  text: {fontSize: 24, fontWeight: '600', marginHorizontal: 10},
  label: {
    color: colors.black,
    fontSize: 14,
    marginBottom: 10,
  },
  disable: {
    backgroundColor: colors.disable,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    marginLeft: 5,
  },
};

export default PlusMinusStyle;
