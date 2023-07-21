import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from "./screens/Profile";
import Profiledata from "./screens/Profiledata";
import Profiledatashow from "./screens/Profiledatashow";
import MySchedule from "./screens/MySchedule"
import ShopeSchedule from './screens/ShopeSchedule';
import ShopSchedule1 from './screens/ShopSchedule1';
import Availbility from './screens/Availbility';
import Leaverequest from './screens/Leaverequest';
import Leaverequestshow from './screens/Leaverequestshow';
import Message from './screens/Message';
import Messageshow from "./screens/Messageshow";
import Edithome from './screens/Home123';



const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Homepage">

        <Stack.Screen name="Homepage" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Edithomepage" component={Edithome} options={{ headerShown: false }} />
        <Stack.Screen name="profilepage" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Profiledatapage" component={Profiledata} options={{ headerShown: false }} />
        <Stack.Screen name="Profiledatashowpage" component={Profiledatashow} options={{ headerShown: false }} />
        <Stack.Screen name="MySchedulepage" component={MySchedule} options={{ headerShown: false }} />
        <Stack.Screen name="ShopeSchedulepage" component={ShopeSchedule} options={{ headerShown: false }} />
        <Stack.Screen name="ShopSchedule1page" component={ShopSchedule1} options={{ headerShown: false }} />
        <Stack.Screen name="Availbilitypage" component={Availbility} options={{ headerShown: false }} />
        <Stack.Screen name="Leaverequestpage" component={Leaverequest} options={{ headerShown: false }} />
        <Stack.Screen name="Leaverequestshowpage" component={Leaverequestshow} options={{ headerShown: false }} />
        <Stack.Screen name="Messagepage" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Messageshowpage" component={Messageshow} options={{ headerShown: false }} />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

