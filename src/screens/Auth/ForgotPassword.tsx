import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { height, width } from "../../constants/sizes";
import { fonts } from "../../constants/fonts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ForgotPasswordProps = {
  navigation: NativeStackNavigationProp<any>;
};

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const [email, setEmail] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.description}>
          Enter your email address and we'll send you instructions to reset your
          password.
        </Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={[styles.input]}
        />
        <Button mode="contained" onPress={() => {}} style={[styles.button]}>
          Send Reset Link
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate("Login")}
          style={[styles.link]}
        >
          Back to Login
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
  description: {
    textAlign: "center",
    marginBottom: 20,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  input: {
    marginBottom: 15,
    width: width * 0.8,
    alignSelf: "center",
  },
  button: {
    marginTop: 10,
    width: width * 0.8,
    alignSelf: "center",
  },
  link: {
    marginTop: 20,
    width: width * 0.8,
    alignSelf: "center",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default ForgotPassword;
