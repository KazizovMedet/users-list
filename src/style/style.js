import {createTheme} from "@mui/material";

const initialTheme = createTheme({
  shape: {
    borderRadius: 6,
  },
  palette: {
    primary: {
      main: '#FF9900',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#52176D',
    },
    default: {
      main: '#B9B9B9',
    },
    grey: {
      800: 'rgba(15, 100, 226, 0.08)',
    },
    background: {
      default: '#FCFAF6',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: 'Montserrat !important',
  },
  breakpoints: {
    values: {
      zero: 0,
      xs: 769,
      sm: 1024,
      md: 1290,
      lg: 1550,
      xl: 1920,
    },
  },
});

const theme = createTheme(initialTheme, {
  ...initialTheme,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '32px',
          boxShadow: '10px 10px 40px rgba(0, 0, 0, 0.05)',
          height: '100%',
          overflow: 'unset',
          boxSizing: 'border-box',
          [initialTheme.breakpoints.down('md')]: {
            padding: initialTheme.spacing(3),
          },
        },
      },
    },
    MuiButtonGroup: {
      fontSize: '30px',
      fontWeight: '500',
      textTransform: 'unset',
      padding: '12px 24px',
      [initialTheme.breakpoints.down('md')]: {
        fontSize: '26px',
        padding: '10px 20px',
      },
      [initialTheme.breakpoints.down('sm')]: {
        fontSize: '18px',
        padding: '8px 16px',
      },
      [initialTheme.breakpoints.down('xs')]: {
        fontSize: '12px',
        padding: '6px 12px',
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: '20px',
          height: '20px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: initialTheme.palette.error.main,
          marginLeft: '14px',
          marginRight: '14px',
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: initialTheme.palette.text.secondary,
        },
        input: {
          fontSize: '14px',
          fontWeight: '500',
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '60px',
      [initialTheme.breakpoints.down('lg')]: {
        fontSize: '52px',
      },
      [initialTheme.breakpoints.down('md')]: {
        fontSize: '44px',
      },
      [initialTheme.breakpoints.down('sm')]: {
        fontSize: '38px',
      },
      [initialTheme.breakpoints.down('xs')]: {
        fontSize: '32px',
      },
    },
    h2: {
      fontSize: '60px',
      [initialTheme.breakpoints.down('lg')]: {
        fontSize: '40px',
      },
      [initialTheme.breakpoints.down('md')]: {
        fontSize: '30px',
      },
      [initialTheme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
      [initialTheme.breakpoints.down('xs')]: {
        fontSize: '18px',
      },
    },
    body1: {
      fontSize: '26px',
      [initialTheme.breakpoints.down('lg')]: {
        fontSize: '22px',
      },
      [initialTheme.breakpoints.down('md')]: {
        fontSize: '20px',
      },
      [initialTheme.breakpoints.down('sm')]: {
        fontSize: '15px',
      },
    },
    body2: {
      fontSize: '20px',
      [initialTheme.breakpoints.down('md')]: {
        fontSize: '15px',
      },
      [initialTheme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
    },
  },
});

export default theme;
