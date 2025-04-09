export default {
  expo: {
    name: "Foodisto",
    slug: "foodisto-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "default",
    newArchEnabled: true,
    extra: {
      rapidApiKey: process.env.RAPID_API_KEY,
      rapidApiHost: process.env.RAPID_API_HOST,
    },
    splash: {
      image: "./src/assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.harisamjad05.foodisto",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.harisamjad05.foodisto",
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
  },
};
