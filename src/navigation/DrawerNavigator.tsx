// navigation/DrawerNavigator.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { useTheme } from "../ThemeContext";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { paperTheme } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerTitle: "",
        headerBackground: () => (
          <View
            style={[
              styles.headerBackground,
              { backgroundColor: paperTheme.colors.onBackground },
            ]}
          />
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 16 }}
          >
            <MaterialCommunityIcons
              name="menu"
              size={24}
              color={paperTheme.colors.primary}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
  },
});

export default DrawerNavigator;
