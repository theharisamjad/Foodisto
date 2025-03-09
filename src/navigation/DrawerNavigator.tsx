// navigation/DrawerNavigator.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { useTheme } from "../ThemeContext";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { width } from "../constants/sizes";
import { scale } from "react-native-size-matters";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { paperTheme } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        header: () => (
          <Appbar.Header style={styles.header}>
            <Appbar.Action
              style={[
                styles.menuIcon,
                { backgroundColor: paperTheme.colors.onBackground },
              ]}
              icon="menu"
              size={scale(28)}
              color={paperTheme.colors.primary}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </Appbar.Header>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
  },
  menuIcon: {
    borderRadius: 32,
    width: scale(50),
    height: scale(50),
  },
});

export default DrawerNavigator;
