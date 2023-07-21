




import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, ImageBackground,TextInput,onPress} from 'react-native';

const Profiledata = ({ navigation }) => {
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

      <View style={{ flex: 2.5, backgroundColor: '#FFF', flexDirection: "row", alignItems: "center", }}>
        <ImageBackground source={require('../images/profileimage.png')} resizeMode="cover" style={{ height: 220, width: 380, }} >

          <TouchableOpacity style={{ width: 72, height: 72, alignSelf: "center", top: 60 }}>
            <Image source={require('../images/Ellipses.png')} />
          </TouchableOpacity>

          <Text style={{ color: "#222", fontSize: 20, fontWeight: 700, height: 30, width: 152, top: 70, left: 125 }}>Vanesa Garcia</Text>
          <Text style={{ color: "#222", fontSize: 14, fontWeight: 400, height: 21, width: 64, top: 70, left: 165 }}>Manager</Text>


          <TouchableOpacity style={{ width: 36, height: 34, top: -80, left: 9 }} onPress={() => navigation.navigate('Profiledatashowpage', { name: 'Profiledatashowpage' })}>
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
          <View style={{flexDirection:"row",justifyContent:"space-between",margin:10}}>
          <Text style={{ color: "#222", fontSize: 16, fontWeight: 500, width: 169, height: 24}}>Personal Information</Text>
          <TouchableOpacity style={{ width: 25, height: 25, }} onPress={() => navigation.navigate('Profiledatapage', { name: 'Profiledatapage' })}>
            <Image source={require('../images/edit.png')} />
          </TouchableOpacity>
          </View>


          <Text style={{ width: 49, height: 18, color: "#666", fontSize: 12, fontWeight: 400,margin:5,marginLeft:10}}>Address</Text>
          <View>
          <TextInput
        style={styles.input00}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
       </View>

       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
       <Text style={{ width: 55, height: 18, color: "#999", fontSize: 12, fontWeight: 400,marginLeft:10,marginTop:10 }}>City</Text>
       <Text style={{ width: 55, height: 18, color: "#999", fontSize: 12, fontWeight: 400,marginRight:100,marginTop:10}}>State</Text>
       </View>

<View style={{flexDirection:"row",justifyContent:"space-between"}}>
          
          <View>
          <TextInput
        style={styles.input01}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          </View>

        
          <View>
          <TextInput
        style={styles.input02}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          </View>

</View>

<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text style={{ width: 80, height: 18,  color: "#999", fontSize: 12, fontWeight: 400,marginLeft:10,marginTop:10 }}>Cell Phone</Text>
<Text style={{ width: 80, height: 18,  color: "#999", fontSize: 12, fontWeight: 400,marginRight:75 ,marginTop:10}}>Zip Code</Text>
</View>

<View style={{flexDirection:"row",justifyContent:"space-between",}}>
         
          <View>
          <TextInput
        style={styles.input03}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          </View>

        
          <View>
          <TextInput
        style={styles.input04}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          </View>
</View>

          <Text style={{ width: 80, height: 18, color: "#999", fontSize: 12, fontWeight: 400,marginLeft:10,marginTop:10  }}>E-Mail</Text>
          <View >
          <TextInput
        style={styles.input05}
        onChangeText={onChangeNumber5}
        value={number5}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
          </View>
          <Text style={{ width: 200, height: 18,color: "#999", fontSize: 12, fontWeight: 400,marginLeft:10,marginTop:10  }}>Emergency Contact Name</Text>
          <View>
          <TextInput
        style={styles.input06}
        onChangeText={onChangeNumber6}
        value={number6}
        placeholder="useless placeholder"
        keyboardType="numeric"
        
      />
          </View>

          <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={{ color: "white" }}>Save</Text>
             </TouchableOpacity>




        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

        <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
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
        <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
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
   
    fontSize: 14,
    fontWeight: 400,


  },
 
    input00: {
    height: 42,
    width:343,
    margin: 5,
    borderWidth: 1,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input01: {
    height: 42,
    width:160,
    margin: 5,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input02: {
    height: 42,
    width:160,
    margin: 5,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input03: {
    height: 42,
    width:160,
    margin: 5,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input04: {
    height: 42,
    width:160,
    margin: 5,
    // margin: 12,
    borderWidth: 1,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input05: {
    height: 42,
    width:343,
    // margin: 12,
    borderWidth: 1,
    margin: 5,
    // padding: 10,
    color: "#222",
    borderColor:"#00933B",
    borderRadius:4,
  },
  input06: {
    height: 42,
    width:343,
    
    // margin: 12,
    borderWidth: 1,
    borderColor:"#00933B",
    borderRadius:4,
    margin: 5,
    // padding: 10,
    color: "#222",
  },
  button: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        padding: 10,
        width: 92,
        height: 42,
        alignSelf: "center",
        borderRadius: 8,
        margin: 15,
       
      },
  
});

export default Profiledata;