import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import { useTheme } from "../ThemeContext";
import { Appbar } from "react-native-paper";
export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const { paperTheme, toggleTheme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "", // Hide the title globally
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          header: ({ navigation, ...props }) => (
            <Appbar.Header
              style={{
                backgroundColor: paperTheme.colors.background,
              }}
            >
              <Appbar.BackAction
                color={paperTheme.colors.primary}
                onPress={() => navigation.goBack()}
              />
            </Appbar.Header>
          ),
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          header: ({ navigation, ...props }) => (
            <Appbar.Header
              style={{
                backgroundColor: paperTheme.colors.background,
              }}
            >
              <Appbar.BackAction
                color={paperTheme.colors.primary}
                onPress={() => navigation.goBack()}
              />
            </Appbar.Header>
          ),
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
