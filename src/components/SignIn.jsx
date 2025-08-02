import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";

// This is the function that will be called when the form is submitted.
// For this exercise, we'll just log the values.
const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry // This is the prop to obscure the password input.
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default SignIn;
