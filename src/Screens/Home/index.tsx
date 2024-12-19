import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>APP LIFTLOG</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})