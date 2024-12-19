import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PrimaryButton from '../../Components/Buttons/primaryButton';

const Home: React.FC = () => {
  const handleCreateWorkout = () => {
    console.log('Botão de criar treino pressionado!');
    // Aqui você pode navegar para outra tela ou executar qualquer lógica adicional.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.highlight}>Lift</Text>Log
      </Text>
      <PrimaryButton title='Criar treino' onPress={handleCreateWorkout}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Fundo escuro.
    paddingHorizontal: 24
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold', 
    color: '#FFFFFF',
    marginBottom: 64, 
  },
  highlight: {
    color: '#ff4500', 
    fontWeight: '900',
  },
});
