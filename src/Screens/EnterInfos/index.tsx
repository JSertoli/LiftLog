import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DefaultNavbar from "../../Components/NavBar/DefaultNavbar";

const EnterInfos: React.FC = () => {
  return (
    <View style={styles.container}>
      <DefaultNavbar title="EnterInfos" />
      <Text>EnterInfos</Text>
    </View>
  );
};

export default EnterInfos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
