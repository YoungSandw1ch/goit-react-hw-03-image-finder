export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    headerBlue: '#3f51b5',
    darkColor: 'rgba(0, 0, 0, 0.8)',

    green: 'green',
    red: 'red',
    blue: '#55BAD2',
    darkBlue: '#00809e',
    orange: 'orange',
    online: 'green',
    ofline: 'red',
    buttonGrey: '#8b939f',
    secondWhite: '#f6ffff',
    fistFontColor: '#2a2a2a',
    greyFontColor: '#969191',
    profileShadow: '#dbe1ea',
    secondColor: '#8b96a2',
    profileBg: '#f4f6f9',
    profileBorder: '#e7ebf1',
    lightgrey: 'lightgrey',
    tableBorder: '#E2E2E2',
    tableRow: '#EDF1F3',
    tableHead: '#55BAD2',
    tableFont: '#888C8E',
    lightYellow: 'rgb(247, 243, 161)',
    darkRed: 'rgb(187, 53, 53)',
    violet: 'palevioletred',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    xm: '20px',
    ms: '25px',
    l: '32px',
    ls: '48px',
    xl: '64px',
    custom: '26px',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid',
  },

  radii: {
    none: '0',
    normal: '4px',
    medium: '8px',
    round: '50%',
  },

  sizes: {
    container: '1032px',
    section: '500px',
    item: '450px',
    contactsList: '310px',
    half: '50%',
    full: '100%',
    inputHeight: '35px',
    contactHeight: '25px',
  },

  shadows: {
    normal: `1px 1px 1px grey`,
    phoneBook: `3px 3px 1px #75d2f0, -3px -2px 1px #57dae2`,
    buttonShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    itemShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    searchBar:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },

  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      customLetterSpacing: '2px',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },

  transitions: {
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
