import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import merge from "deepmerge";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const lightTheme = {
  ...CombinedDefaultTheme,
  colors: {
    primary: "rgb(192, 0, 27)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 218, 215)",
    onPrimaryContainer: "rgb(65, 0, 4)",
    secondary: "rgb(119, 86, 83)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 218, 215)",
    onSecondaryContainer: "rgb(44, 21, 19)",
    tertiary: "#F5F5F5",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 222, 166)",
    onTertiaryContainer: "rgb(39, 25, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(245, 245, 245)",
    onBackground: "rgb(255, 255,  255)",
    surface: "rgba(255, 251, 255, 0.4)",
    onSurface: "rgb(32, 26, 25)",
    surfaceVariant: "rgb(245, 221, 219)",
    onSurfaceVariant: "rgb(83, 67, 66)",
    outline: "rgb(133, 115, 113)",
    outlineVariant: "rgb(216, 194, 191)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 46)",
    inverseOnSurface: "rgb(251, 238, 236)",
    inversePrimary: "rgb(255, 179, 173)",
    elevation: {
      level0: "transparent",
      level1: "rgb(252, 238, 244)",
      level2: "rgb(250, 231, 237)",
      level3: "rgb(248, 223, 230)",
      level4: "rgb(247, 221, 228)",
      level5: "rgb(246, 216, 223)",
    },
    surfaceDisabled: "rgba(32, 26, 25, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 25, 0.38)",
    backdrop: "rgba(59, 45, 44, 0.4)",
  },
};

const darkTheme = {
  ...CombinedDarkTheme,
  colors: {
    primary: "rgb(255, 179, 173)",
    onPrimary: "rgb(104, 0, 10)",
    primaryContainer: "rgb(147, 0, 18)",
    onPrimaryContainer: "rgb(255, 218, 215)",
    secondary: "rgb(231, 189, 185)",
    onSecondary: "rgb(68, 41, 39)",
    secondaryContainer: "rgb(93, 63, 61)",
    onSecondaryContainer: "rgb(255, 218, 215)",
    tertiary: "#1E1E1E",
    onTertiary: "rgb(64, 45, 4)",
    tertiaryContainer: "rgb(88, 67, 25)",
    onTertiaryContainer: "rgb(255, 222, 166)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(32, 26, 25)",
    onBackground: "rgb(237, 224, 222)",
    surface: "rgba(32, 26, 25, 0.4)",
    onSurface: "rgb(237, 224, 222)",
    surfaceVariant: "rgb(83, 67, 66)",
    onSurfaceVariant: "rgb(216, 194, 191)",
    outline: "rgb(160, 140, 138)",
    outlineVariant: "rgb(83, 67, 66)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(237, 224, 222)",
    inverseOnSurface: "rgb(54, 47, 46)",
    inversePrimary: "rgb(192, 0, 27)",
    elevation: {
      level0: "transparent",
      level1: "rgb(43, 34, 32)",
      level2: "rgb(50, 38, 37)",
      level3: "rgb(57, 43, 41)",
      level4: "rgb(59, 44, 43)",
      level5: "rgb(63, 47, 46)",
    },
    surfaceDisabled: "rgba(237, 224, 222, 0.12)",
    onSurfaceDisabled: "rgba(237, 224, 222, 0.38)",
    backdrop: "rgba(59, 45, 44, 0.4)",
  },
};

export { lightTheme, darkTheme };
