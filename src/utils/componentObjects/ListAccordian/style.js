import colors from '../../../style/colors';

export const listAccordianStyle = {
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: colors.fifth,
  },
  rowIcon: {
    fontSize: 30,
    color: colors.primary,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.fourth,
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  itemActive: {
    fontSize: 12,
    color: colors.primary,
  },
  btnActive: {
    borderColor: colors.third,
  },
  btnInActive: {
    borderColor: colors.fourth,
  },

  parentHr: {
    height: 1,
    color: colors.white,
    width: '100%',
  },
  childHr: {
    height: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
};
