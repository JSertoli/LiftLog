import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    }
})