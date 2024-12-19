import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

interface DefaultNavbarProps {
    title: string;
}

const DefaultNavbar: React.FC<DefaultNavbarProps> = ({ title }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backArrow} onPress={() => {
            navigation.goBack();
        }}>
            <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default DefaultNavbar

const styles = StyleSheet.create({
    container: {
        height: 64,
        width: "100%",
        backgroundColor: "#000",
        justifyContent: "center"
    },
    backArrow: {
        paddingLeft: 16
    }
})