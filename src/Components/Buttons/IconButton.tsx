import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface IconButtonProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ title, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
        {icon}
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff4500",
    height: 48, 
    paddingHorizontal: 16, 
    borderRadius: 8, 
    justifyContent: "center", 
  },
  contentContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
  },
  textStyle: {
    color: "white",
    marginLeft: 8, 
    fontSize: 16, 
    fontWeight: "bold", 
  },
});
