import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import DrawerNavigator from "./DrawerNavigator";
import { Cart, Favourites, FoodItemDetail, Profile } from "../screens";
import { useTheme } from "../ThemeContext";
import { darkTheme, lightTheme } from "../constants/colors";
export type RootStackParamList = {
  Auth: undefined;
  Main: {
    screen: string;
    params?: {
      screen: string;
    };
  };
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
  Favourites: undefined;
  FoodItemDetail: {
    item: {
      id: number;
      name: string;
      price: number;
      img: string;
      veg: boolean;
      description: string;
    };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { paperTheme } = useTheme();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <NavigationContainer theme={paperTheme}>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Auth"
            component={AuthNavigator}
          />
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Main"
              component={DrawerNavigator}
            />

            <Stack.Screen name="FoodItemDetail" component={FoodItemDetail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
