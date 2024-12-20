import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import EnterInfos from '../Screens/EnterInfos';
import Result from '../Screens/Result';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="EnterInfos"
          component={EnterInfos}
        />
        <Stack.Screen
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;