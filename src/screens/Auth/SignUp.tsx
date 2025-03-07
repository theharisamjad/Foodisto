import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { height, width } from "../../constants/sizes";
import { fonts } from "../../constants/fonts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../../ThemeContext";
type SignUpProps = {
  navigation: NativeStackNavigationProp<any>;
};

const SignUp = ({ navigation }: SignUpProps) => {
  const { paperTheme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Card
        style={[styles.card, { backgroundColor: paperTheme.colors.surface }]}
      >
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            Create Account
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
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={[
              styles.input,
              { backgroundColor: paperTheme.colors.surface },
            ]}
          />
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
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
            Sign Up
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate("Login")}
            style={[styles.link]}
          >
            Already have an account? Login
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
    marginBottom: 20,
    fontFamily: fonts.bold,
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

export default SignUp;
