// navigation/BottomTabNavigator.tsx
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Cart, Profile, Favourites } from "../screens";
import { useTheme } from "../ThemeContext";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { Icon } from "react-native-paper";
import AnimatedTabBarIcon from "../components/AnimatedTabBarIcon";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { paperTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? "home" : "home-outline";

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CartTab") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "FavouritesTab") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "ProfileTab") {
            iconName = focused ? "account" : "account-outline";
          }

          return (
            <AnimatedTabBarIcon
              color={color}
              focused={focused}
              iconName={iconName}
            />
          );
        },
        tabBarInactiveTintColor: paperTheme.colors.onSurface,
        tabBarStyle: [
          styles.tabBar,
          { backgroundColor: paperTheme.colors.onBackground },
        ], // Custom tab bar style
        tabBarShowLabel: true, // Show labels
        headerShown: false, // Hide header
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} options={{ title: "Home" }} />
      <Tab.Screen
        name="FavouritesTab"
        component={Favourites}
        options={{ title: "Favourites" }}
      />
      <Tab.Screen
        name="CartTab"
        component={Cart}
        options={{ title: "Orders" }}
      />
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
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
  },
});

export default BottomTabNavigator;
