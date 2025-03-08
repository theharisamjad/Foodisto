// navigation/BottomTabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Home, Cart, Profile, Favourites } from "../screens";
import { useTheme } from "../ThemeContext";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Animated from "react-native-reanimated";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { paperTheme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CartTab") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "FavouritesTab") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "ProfileTab") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={scale(24)} color={color} />;
        },

        tabBarActiveTintColor: paperTheme.colors.primary, // Active icon and label color
        tabBarInactiveTintColor: paperTheme.colors.onSurface, // Inactive icon and label color
        tabBarStyle: [
          styles.tabBar,
          { backgroundColor: paperTheme.colors.onBackground },
        ], // Custom tab bar style
        tabBarShowLabel: false, // Show labels
        headerShown: false, // Hide header
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} options={{ title: "Home" }} />
      <Tab.Screen
        name="FavouritesTab"
        component={Favourites}
        options={{ title: "Favourites" }}
      />
      <Tab.Screen name="CartTab" component={Cart} options={{ title: "Cart" }} />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BottomTabNavigator;
