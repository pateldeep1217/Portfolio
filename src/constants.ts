type ColorTokens = React.CSSProperties & {
    [key: string]: string; // This allows any string property with a string value
};

export const LIGHT_COLORS: ColorTokens = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-background': 'hsl(241, 47%, 83%)',

};

export const DARK_COLORS: ColorTokens = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-background': 'hsl(253, 36%, 15%)',
};


export const LIGHT_SHADOWS = {
};
export const DARK_SHADOWS = {

};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};







