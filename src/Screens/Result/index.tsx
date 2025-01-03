import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Result: React.FC<any> = ({ route }) => {
  const navigation = useNavigation();

  const { message } = route.params;

  return (
    <ScrollView bounces={false}>
    <View style={styles.container}>
      <Text style= {styles.textStyle}>{message}</Text>
    </View>
    </ScrollView>
  )
}

export default Result

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
      color: "white",
    }
})