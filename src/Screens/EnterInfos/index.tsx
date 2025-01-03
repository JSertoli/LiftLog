import { Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DefaultNavbar from "../../Components/NavBar/DefaultNavbar";
import StyledTextInput from "../../Components/Input/StyledTextInput";
import DropdownComponent from "../../Components/Input/DropdownComponent";
import PrimaryButton from "../../Components/Buttons/primaryButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EnterInfosController from "../../Controllers/EnterInfos";

const EnterInfos: React.FC = ({ navigation }: any) => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [workoutTimes, setWorkoutTimes] = useState<string>("");
  const [trainingGoal, setTrainingGoal] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  var response: string;

  const data = [
    { label: "1 dia", value: "1" },
    { label: "2 dias", value: "2" },
    { label: "3 dias", value: "3" },
    { label: "4 dias", value: "4" },
    { label: "5 dias", value: "5" },
    { label: "6 dias", value: "6" },
    { label: "7 dias", value: "7" },
  ];

  const dataTrainingGoal = [
    { label: "Emagrecer", value: "emagrecer" },
    { label: "Ganhar massa muscular", value: "ganhar massa muscular" },
    { label: "Resistência", value: "resistência" },
    { label: "Força", value: "força" },
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
        icon={
          <MaterialCommunityIcons
          name="weight-lifter"
          size={20}
          color="white"
        />
        }
      />
      <DropdownComponent
        borderColor="#ff4500"
        label="Objetivo dos treinos"
        data={dataTrainingGoal}
        labelColor="#FFFFFF"
        onChange={(item) => {
          setTrainingGoal(item.value);
        }}
        icon={
          <MaterialCommunityIcons
          name="marker-check"
          size={20}
          color="white"
        />
        }
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Gerar treino"
          onLoad={loading}
          disabled = {height && weight && workoutTimes && trainingGoal ? false : true}
          onPress={async () => {
            try {
              setLoading(true);
              Keyboard.dismiss();
              response = await EnterInfosController.generateTraining(weight, height, workoutTimes, trainingGoal);
            }  catch (err) {
              console.log(err);
            } finally {
              setLoading(false);
              navigation.navigate("Result", {
                message: response
              });
            }
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
