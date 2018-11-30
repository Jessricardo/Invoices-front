import {
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

export default {
  fontFamily: 'Avenir',
  palette: {
    primary1Color: '#af2f2fab',
    primary2Color: '#27464b',
    primary3Color: grey400,
    accent1Color: '#00b74f',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#00b74f',
    shadowColor: fullBlack,
  },
  tableRow: {
    selectedColor: '#ffffff',
  },
  menuItem: {
    backgroundColor: '#ffffff',
  },
  tabs: {
    backgroundColor: '#fff',
    selectedTextColor: '#00843d',
    textColor: '#838383',
  },
  tableRowColumn: {
    fontFamily: 'Avenir-Medium',
    background: 'red',
  },
  tableHeaderColumn: {
    backgroundColor: 'red',
  },
  raisedButton: {
    textTransform: 'capitalize',
    fontWeight: 300,
  },
  flatButton: {
    textTransform: 'initial',
    fontWeight: 500,
  },
};
