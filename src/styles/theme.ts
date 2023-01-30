const theme = {
  colors: {
    PRIMARY: '#72e400',
    SECONDARY: '#0047ff',
    WHITE: '#ffffff',
    GREEN: '#72e400',
    RED: '#ff0000',
    BLUE: '#0047ff',
    YELLOW: '#ffe600',
    DIRTY_RED: '#e30029',
    DIRTY_MORGANA: '#e10095',
    DIRTY_VIOLET: '#ab00e7',
    DIRTY_NAVU_BLUE: '#3e00ed',
    DIRTY_BLUE: '#0086e7',
    DIRTY_AQUA: '#00c5d1',
    DIRTY_GREEN: '#00b247',
    DIRTY_LIGHT_GREEN: '#a1da00',
    DIRTY_YELLOW: '#e7d000',
    DIRTY_ORANGE: '#f17400',
  },
  media: {
    extraExtraLarge: '(min-width: 1400px)',
    extraLarge: '(min-width: 1200px)',
    large: '(min-width: 992px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 576px)',
  },
  durations: {
    ms300: '0.3s',
  },
  borders: {
    buttons: '10px',
    fields: '10px',
  },
};

export const lightTheme = {
  bg: '#fafafa',
  ...theme,
};

export const darkTheme = {
  bg: '#222222',
  ...theme,
};
