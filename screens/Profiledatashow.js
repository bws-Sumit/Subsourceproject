



import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView,ImageBackground } from 'react-native';

const Message = ({ navigation }) => {
 const [text, onChangeText] = React.useState('Useless Text')
   const [number, onChangeNumber] = React.useState('');
   const [number1, onChangeNumber1] = React.useState('');
   const [number2, onChangeNumber2] = React.useState('');
   const [number3, onChangeNumber3] = React.useState('');
   const [number4, onChangeNumber4] = React.useState('');
   const [number5, onChangeNumber5] = React.useState('');
   const [number6, onChangeNumber6] = React.useState('');

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >

      <View style={{ flex: 2.5, backgroundColor: '#FFF', flexDirection: "row", alignItems: "center",}}>
      <ImageBackground source={require('../images/profileimage.png')} resizeMode="cover" style={{ height: 220, width: 380, }} >

             <TouchableOpacity style={{ width: 72, height: 72, alignSelf: "center", top: 60 }}>
               <Image source={require('../images/Ellipses.png')} />
             </TouchableOpacity>

             <Text style={{ color: "#222", fontSize: 20, fontWeight: 700, height: 30, width: 152, top: 70, left: 125 }}>Vanesa Garcia</Text>
             <Text style={{ color: "#222", fontSize: 14, fontWeight: 400, height: 21, width: 64, top: 70, left: 165 }}>Manager</Text>


             <TouchableOpacity style={{ width: 36, height: 34, top: -80, left: 9 }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
               <Image source={require('../images/leftarrow.png')} />
             </TouchableOpacity>


             <View style={{ width: 36, height: 34, top: -110, left: 320 }}>
               <Image source={require('../images/greendot.png')} />
             </View>
             <TouchableOpacity style={{ width: 36, height: 34, top: -138, left: 326 }}>
               <Image source={require('../images/camera.png')} />
             </TouchableOpacity>

             <View style={{ width: 36, height: 34, top: -120, left: 205 }}>
               <Image source={require('../images/greendot.png')} />
             </View>
             <TouchableOpacity style={{ width: 36, height: 34, top: -148, left: 211 }}>
               <Image source={require('../images/camera.png')} />
             </TouchableOpacity>
           </ImageBackground>

      </View>


      <View style={styles.aaa}>
        <ScrollView>
          <Text style={{ color: "#222", fontSize: 16, fontWeight: 500, width: 169, height: 24, top: 27 }}>Personal Information</Text>
          <TouchableOpacity style={{ width: 25, height: 25, left: 285 }} onPress={() => navigation.navigate('Profiledatapage', { name: 'Profiledatapage' })}>
            <Image source={require('../images/edit.png')} />
          </TouchableOpacity>



          <Text style={{ width: 49, height: 18, top: 10, color: "#666", fontSize: 12, fontWeight: 400 }}>Address</Text>
          <View><Text style={{ height: 28,
         width: 305,
         margin: 12,
         padding: 4,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,
         left:-25
         }}>8502 Preston Rd. Inglewood, Maine 98380</Text></View>
          <Text style={{ width: 55, height: 18,  top: 5, color: "#999", fontSize: 12, fontWeight: 400 }}>City</Text>
          <View><Text style={{ height: 42,
         margin: 12,
    
         padding: 10,
         top: -10,
         left: -20,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,}}>India</Text></View>

          <Text style={{ width: 55, height: 18, left: 180, top: -79, color: "#999", fontSize: 12, fontWeight: 400 }}>State</Text>
          <View><Text style={{ height: 42,
         margin: 12,
         padding: 10,
         width: 185,
         top: -95,
         left: 158,
         fontSize: 14,
         fontWeight: 400,
         color:"#222"
         }}>Punjab</Text></View>

          <Text style={{ width: 80, height: 18, top: -86, color: "#999", fontSize: 12, fontWeight: 400 }}>Cell Phone</Text>
          <View><Text style={{height: 42,
         margin: 12,
         padding: 10,
         width: 185,
         top: -100,
         left: 155,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,}}>5896325455</Text></View>

          <Text style={{ width: 80, height: 18, top: -170, left:180, color: "#999", fontSize: 12, fontWeight: 400 }}>Zip Code</Text>
          <View><Text style={{ height: 42,
         margin: 12,
    
         padding: 10,
         width: 185,
         top: -185,
         left: -20,
         color: "#222",
       fontSize: 14,
         fontWeight: 400,
    }}>5896325455</Text></View>
          <Text style={{ width: 80, height: 18, top: -175, color: "#999", fontSize: 12, fontWeight: 400 }}>E-Mail</Text>
          <View ><Text style={{ height: 42,
         margin: 12,
        padding: 10,
         width: 250,
       top: -190,
         left: -20,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,}}>sumitthakur58541@gmail.com</Text></View>
          <Text style={{ width: 200, height: 18, top: -180, color: "#999", fontSize: 12, fontWeight: 400 }}>Emergency Contact Name</Text>
          <View><Text style={{height: 42,
        margin: 12,
    
         padding: 10,
         top: -195,
         left: -20,
         color: "#222",
         fontSize: 14,
       fontWeight: 400,
       }}>5896325455</Text></View>




        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
          <Image source={require('../images/tab1.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('MySchedulepage', { name: 'MySchedulepage' })}>
          <Image source={require('../images/tab3.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('ShopSchedule1page', { name: 'ShopSchedule1page' })}>
          <Image source={require('../images/tab4.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
          <Image source={require('../images/tab6.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
          <Image source={require('../images/LIGHT3.png')} />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,


  },
  aaa: {
    flex: 7,
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    flexDirection: "column",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderTopColor: "#00933B",
    borderBottomColor: "#F7F8FA",
    
  

  },
  countainer: {
         flex: 1,
         backgroundColor: "#F7F8FA",
       },
       header: {
         height: 650,
         width: 380,
         backgroundColor: "#F7F8FA",
       },
       input: {
         height: 28,
         width: 289,
         margin: 12,
         padding: 4,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,
    
    
       },
       input1: {
         height: 42,
         margin: 12,
         padding: 10,
         width: 185,
         top: -95,
         left: 195,
         fontSize: 14,
         fontWeight: 400,
    
    
    
    
       },
       input2: {
         height: 42,
         margin: 12,
         padding: 10,
         width: 185,
         top: -100,
         left: 195,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,
       },
       input3: {
         height: 42,
         margin: 12,
    
         padding: 10,
         width: 185,
         top: -185,
         left: -5,
         color: "#222",
       fontSize: 14,
         fontWeight: 400,
    
    
       },
       input4: {
         height: 42,
         margin: 12,
        padding: 10,
         width: 185,
       top: -190,
         left: -5,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,
       },
       input5: {
         height: 42,
        margin: 12,
    
         padding: 10,
         top: -195,
         left: -5,
         color: "#222",
         fontSize: 14,
       fontWeight: 400,
    
       },
       input6: {
         height: 42,
         margin: 12,
    
         padding: 10,
         top: -10,
         left: -5,
         color: "#222",
         fontSize: 14,
         fontWeight: 400,
    
    
       },
});

export default Message;