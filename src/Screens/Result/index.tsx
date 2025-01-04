import { Dimensions, ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DefaultNavbar from "../../Components/NavBar/DefaultNavbar";
import IconButton from "../../Components/Buttons/IconButton";
import Feather from "@expo/vector-icons/Feather";
import * as Clipboard from "expo-clipboard";

const Result: React.FC<any> = ({ route }) => {
  const navigation = useNavigation();
  const { message } = route.params;

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(message); 
    Alert.alert("Copiado!", "O treino foi copiado para a área de transferência.");
  };

  return (
    <View style={styles.container}>
      <DefaultNavbar title="Resultado do Treino" />
      <ScrollView bounces={false}>
        <View style={styles.content}>
          <Text style={styles.headerText}>Seu Treino Gerado</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{message}</Text>
          </View>
          <View style={styles.copyButton}>
            <IconButton
              title="Copiar Treino"
              icon={<Feather name="copy" size={20} color="white" />}
              onPress={copyToClipboard}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffcc00",
    textAlign: "center",
    marginBottom: 16,
  },
  textContainer: {
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    letterSpacing: 0.5,
  },
  copyButton: {
    alignSelf: "center",
    width: Dimensions.get("window").width / 2,
  },
});
