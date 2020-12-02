const colors = {
  darkGray: '#161616',
  black: '#000',
  blue: '#21A8F4',
  white: '#FFFFFF',
  pink: '#F204C5',
  opacityBlue: 'rgba(33, 168, 244, .2)',
  opacityPink: 'rgba(242, 4, 197, .2)',
  opacityGray: 'rgba(22, 22, 22, .2)',
  orangeSoft: '#ff504f',
  gray: '#808080',
  googleColor: '#4285f4',
  ghostWhite: '#f8f8ff',
  lightGreen: '#00ff59',
  red: '#fa1005',
  lightBlue: '#EEF4FC',
  middleBlue:'#0197FF',
  aquamarine: '#7FFFD4',
  aliceblue:  '#F0F8FF'
};


export default {
  blue: colors.blue,
  pink: colors.pink,
  white: colors.white,
  middleBlue: colors.middleBlue,
  darkGray: colors.darkGray,
  black: colors.black,
  orangeSoft: colors.orangeSoft,
  gray: colors.gray,
  lightGreen: colors.lightGreen,
  lightBlue: colors.lightBlue,
  red: colors.red,
  ghostWhite: colors.ghostWhite,
  opacityGray: colors.opacityGray,

  input: {
    inputColor: colors.blue,
    inputPlaceholder: colors.gray
  },
  customButton: {
    customButtonColor: colors.darkGray,
    customButtonBorderColor: colors.darkGray
  },
  googleButtonColor: colors.googleColor,
  footer: {
    footerBackground: colors.black,
    footerColor: colors.white,
    footerColorOnHover: colors.blue
  },
  menu: {
    background: colors.white,
    color: colors.darkGray,
    selected: {
      background: colors.lightBlue,
      color: colors.blue,
    },
    infoNew:{
      background:colors.lightBlue,
      color: colors.orangeSoft
    }
  },
  header: {
    background: colors.white
  },
  projectKey: {
    color: colors.opacityGray
  },
  issueCard: {
    borderColor: colors.opacityGray,
    timeSpentColor: colors.blue,
    statusColor: {
      done: colors.lightGreen,
      notDone: colors.orangeSoft,
      new: colors.blue
    }
  },
  calendar: {
    background: colors.blue,
    inputsContainerBorder: colors.blue,
    inputsContainerBackground: colors.white
  },
  imageLink: {
    circleInfoBackground: colors.orangeSoft
  },
  projectCard: {
    backgroundNew: colors.opacityBlue,
    background: colors.ghostWhite
  },
  dashboard: {
    newItems: colors.orangeSoft
  },
  projectPopUp:{
    background: colors.ghostWhite
  },
  employeeItem: {
    statusActive: colors.lightGreen,
    statusFired: colors.orangeSoft,
    backgroundNew: colors.opacityBlue
  },
  employeePopUp: {
    background: colors.ghostWhite
  },
  TimeAndSalarySpentReportItem: {
    projectRowBackground: colors.aquamarine,
    employeeRowBackGround: colors.aliceblue,
    employeeRowBorderColor: colors.gray,
    totalInPercentBackground: colors.blue
  },
  suspenseComponent: {
    textColor: colors.blue
  }
};
