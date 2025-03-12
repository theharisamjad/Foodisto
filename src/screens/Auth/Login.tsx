import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import WelcomeBackground from "../../assets/images/welcome_image.jpg";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { height, sizes, width } from "../../constants/sizes";
import { fonts } from "../../constants/fonts";
import { useTheme } from "../../ThemeContext";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/slices/authSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/AuthNavigator";

type LoginProps = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "Login">;
};

const Login = ({ navigation }: LoginProps) => {
  const { paperTheme } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        dispatch(loginSuccess({ email }));
      } else {
        setError("Please fill in all fields");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={WelcomeBackground} style={[styles.background]}>
        <Card style={[styles.card]}>
          <Card.Content>
            <Text style={[styles.title]}>Foodisto</Text>
            <Text style={[styles.subtitle]}>Login to your account</Text>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              style={[styles.input]}
              mode="outlined"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              style={[styles.input]}
              mode="outlined"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {error && (
              <Text style={[styles.error, { color: paperTheme.colors.error }]}>
                {error}
              </Text>
            )}
            <Text
              style={[styles.forgotPassword]}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password?
            </Text>
            <Button
              mode="contained"
              style={[styles.button]}
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
            >
              Login
            </Button>
            <Text style={[styles.signup]}>
              Don't have an account?{" "}
              <Text
                style={[
                  styles.signupLink,
                  { color: paperTheme.colors.primary },
                ]}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign up
              </Text>
            </Text>
          </Card.Content>
        </Card>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.6,
    padding: 20,
    opacity: 0.9,
  },
  title: {
    textAlign: "center",
    fontSize: sizes.heading,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: sizes.medium,
    fontFamily: fonts.regular,
    marginBottom: 20,
  },
  input: {
    width: width * 0.75,
    marginBottom: 10,
  },
  button: {
    width: width * 0.75,
    borderRadius: 10,
    fontSize: sizes.medium,
    fontFamily: fonts.bold,
    marginTop: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: sizes.small,
    fontFamily: fonts.regular,
    marginBottom: 10,
  },
  signup: {
    textAlign: "center",
    fontSize: sizes.small,
    fontFamily: fonts.regular,
    marginTop: 10,
  },
  signupLink: {
    fontSize: sizes.small,
    fontFamily: fonts.regular,
  },
  error: {
    fontSize: sizes.small,
    fontFamily: fonts.regular,
  },
});
