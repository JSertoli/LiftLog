import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DefaultNavbar from "../../Components/NavBar/DefaultNavbar";
import StyledTextInput from "../../Components/Input/StyledTextInput";
import DropdownComponent from "../../Components/Input/DropdownComponent";
import PrimaryButton from "../../Components/Buttons/primaryButton";

const EnterInfos: React.FC = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [workoutTimes, setWorkoutTimes] = useState<string>("");

  const data = [
    { label: "1 dia", value: "1" },
    { label: "2 dias", value: "2" },
    { label: "3 dias", value: "3" },
    { label: "4 dias", value: "4" },
    { label: "5 dias", value: "5" },
    { label: "6 dias", value: "6" },
    { label: "7 dias", value: "7" },
  ];

  return (
    <View style={styles.container}>
      <DefaultNavbar title="EnterInfos" />
      <StyledTextInput
        placeholder="cm"
        value={height}
        keyboardType="numeric"
        onChangeText={(value) => {
          setHeight(value);
        }}
        title="Digite sua altura: "
      />
      <StyledTextInput
        placeholder="kg"
        value={weight}
        keyboardType="numeric"
        onChangeText={(value) => {
          setWeight(value);
        }}
        title="Digite seu peso: "
      />
      <DropdownComponent
        borderColor="#ff4500"
        label="Treinos por semana"
        data={data}
        labelColor="#FFFFFF"
        onChange={(item) => {
          setWorkoutTimes(item.value);
        }}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Gerar treino"
          onPress={() => {
            console.log(height);
            console.log(weight);
            console.log(workoutTimes);
          }}
        />
      </View>
    </View>
  );
};

export default EnterInfos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 24
  },
});
