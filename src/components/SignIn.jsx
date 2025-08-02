import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

// Define a validation schema using Yup
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.username && errors.username && styles.errorInput,
            ]}
            placeholder="Username"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            error={touched.username && errors.username}
          />
          {/* Display error message */}
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
          <TextInput
            style={[
              styles.input,
              touched.password && errors.password && styles.errorInput,
            ]}
            placeholder="Password"
            secureTextEntry // This is the prop to obscure the password input.
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
          />
          {/* Display error message */}
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
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
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 10,
  },
});

export default SignIn;
