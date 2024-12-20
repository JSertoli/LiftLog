import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface PrimaryButtonProps {
  title: string;
  onLoad: boolean;
  onPress: () => void;
  disabled: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onLoad,
  onPress,
  disabled
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabledButton]} 
        onPress={onPress}
        disabled={disabled}
      >
        {onLoad ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : (
          <Text style={[styles.buttonText, disabled && styles.disabledText]}>{title}</Text> // Apply disabled text style
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#ff4500",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    width: "100%",
  },
  disabledButton: {
    backgroundColor: "#d3d3d3", 
    elevation: 0, 
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledText: {
    color: "#a9a9a9", 
  },
});
