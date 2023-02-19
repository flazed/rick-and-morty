import { createSlice } from '@reduxjs/toolkit';
import { ETheme } from '../../types/theme/theme.enum';
import { lightTheme, darkTheme } from '../../styles/theme';

const themes = {
  [ETheme.LIGHT]: lightTheme,
  [ETheme.DARK]: darkTheme,
};

const themeSlice = createSlice({
  name: 'appTheme',
  initialState: {
    themeType: ETheme.LIGHT,
    theme: themes[ETheme.LIGHT],
  },
  reducers: {
    switchTheme(state) {
      state.themeType = state.themeType === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
      state.theme = themes[state.themeType];
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
