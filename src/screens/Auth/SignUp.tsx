import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
  const [name, setName] = useState("");
  return (
    <ScrollView
      style={{ backgroundColor: paperTheme.colors.background }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container]}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>

        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={[styles.input]}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={[styles.input]}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={[styles.input]}
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          mode="outlined"
          style={[styles.input]}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  input: {
    width: width * 0.8,
    alignSelf: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: width * 0.8,
    alignSelf: "center",
    borderRadius: 10,
  },
  link: {
    marginTop: 10,
    width: width * 0.8,
    alignSelf: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});

export default SignUp;
