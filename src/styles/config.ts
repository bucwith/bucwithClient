import theme  from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends theme {
    colors: {
      mainColor: string;
      textColor: string;
      bgColor: string;
      inputColor: string;
      disabledColor: string;
      enabledColor: string;
      whiteColor: string;
      redColor: string;
    };
    size: {
      mobie: string;
      tablet: string;
      desktop: string;
    };
  }
}