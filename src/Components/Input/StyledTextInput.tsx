import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

interface StyledTextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType: "numeric" | "default";
  title: string;
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  title
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaaaaa"
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingBottom: 8
  },
  input: {
    backgroundColor: "#1c1c1e", 
    color: "#ffffff",
    fontSize: 16,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderColor: "#ff4500", 
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  titleStyle: {
    color: "#FFFFFF",
    paddingBottom: 8
  },
});
