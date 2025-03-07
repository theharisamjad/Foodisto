import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { height, width } from "../../constants/sizes";
import { fonts } from "../../constants/fonts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../../ThemeContext";

type ForgotPasswordProps = {
  navigation: NativeStackNavigationProp<any>;
};

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const { paperTheme } = useTheme();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Card
        style={[styles.card, { backgroundColor: paperTheme.colors.surface }]}
      >
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            Reset Password
          </Text>
          <Text style={styles.description}>
            Enter your email address and we'll send you instructions to reset
            your password.
          </Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={[
              styles.input,
              { backgroundColor: paperTheme.colors.surface },
            ]}
          />
          <Button
            mode="contained"
            onPress={() => {}}
            style={[
              styles.button,
              { backgroundColor: paperTheme.colors.primary },
            ]}
          >
            Send Reset Link
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate("Login")}
            style={[styles.link]}
          >
            Back to Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.9,
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.bold,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  link: {
    marginTop: 20,
  },
});

export default ForgotPassword;
