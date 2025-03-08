// components/CustomDrawerContent.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { scale } from "react-native-size-matters";
import { useTheme } from "../ThemeContext";

const CustomDrawerContent = (props: any) => {
  const { paperTheme } = useTheme();
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: paperTheme.colors.background }}
    >
      <Drawer.Section>
        <Drawer.Item
          style={[styles.drawerItem]}
          label="Home"
          icon="home"
          onPress={() =>
            props.navigation.navigate("Home", {
              screen: "HomeTab",
            })
          }
        />
        <Drawer.Item
          style={styles.drawerItem}
          label="Favourites"
          icon="heart"
          onPress={() =>
            props.navigation.navigate("Home", {
              screen: "FavouritesTab",
            })
          }
        />
        <Drawer.Item
          style={styles.drawerItem}
          label="Cart"
          icon="cart"
          onPress={() =>
            props.navigation.navigate("Home", {
              screen: "CartTab",
            })
          }
        />
        <Drawer.Item
          style={styles.drawerItem}
          label="Profile"
          icon="account"
          onPress={() =>
            props.navigation.navigate("Home", {
              screen: "ProfileTab",
            })
          }
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    padding: scale(10),
    marginVertical: scale(10),
  },
});

export default CustomDrawerContent;
