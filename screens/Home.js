


import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}
    >

      <View style={{ flex:1, backgroundColor: '#FFF', flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>

        <Text style={{ width: 170, height: 50, marginTop: 10, marginRight: 100 }}>  <Image source={require('../images/logo1.png')} /></Text>

        <TouchableOpacity onPress={() => navigation.navigate('ShopeSchedulepage', { name: 'ShopeSchedulepage' })} >
          <Image source={require('../images/headphone.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messagepage', { name: 'Messagepage' })} >
          <Image source={require('../images/msg.png')} />
        </TouchableOpacity>


      </View>

      <View style={{ flex: 1, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

        <View style={{ height: 53, width: 53, backgroundColor: "red", borderRadius: 25 }}>
          <Image source={require('../images/Ellipse.png')} />
        </View>
        <View><Text style={{ color: "#222", fontWeight: 700, fontSize: 24, left: 15, top: -10 }}>Hello,Vanesa Garcia</Text></View>
        <View><Text style={{ color: "#666", fontWeight: 400, fontSize: 14, top: 15, right: 200 }}>Manager</Text></View>
      </View>

      <View style={styles.aaa}>
      <ScrollView>
      <View style={{ height: 160, width: 350, backgroundColor: "#FFF",}}>
             <View style={{ height: 71, width: 160, backgroundColor: '#00933B', left: 5, borderRadius: 8 }}>

               <View style={{ height: 26, width: 32, backgroundColor: "#00933B", top: 10, left: 10 }}>
                 <Image source={require('../images/series.png')} />
               </View>
              <Text style={{ color: "#FFF", fontSize: 18, fontWeight: 600, left: 50, top: -15 }}>303</Text>
               <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, left: 12, top: -10 }}>Subway Series</Text>
               <View style={{ height: 57, width: 71, top: -57, left: 109 }}>
                 <Image source={require('../images/Vector36.png')} />
               </View>

             </View>
             <View style={{ height: 71, width: 160, backgroundColor: '#FFD465', left: 185, top: -71, borderRadius: 8 }}>
               <View style={{ height: 26, width: 32, backgroundColor: "#FFD465", top: 10, left: 10 }}>
                 <Image source={require('../images/Star.png')} />
               </View>
               <Text style={{ color: "#222", fontSize: 18, fontWeight: 600, left: 50, top: -17 }}>303</Text>
               <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, left: 12, top: -10 }}>Subway Series</Text>
               <View style={{ height: 57, width: 71, top: -57, left: 109 }}>
                 <Image source={require('../images/Vector39.png')} />
               </View>
             </View>
             <View style={{ height: 71, width: 160, backgroundColor: '#FFD465', left: 5, top: -55, borderRadius: 8 }}>
               <View style={{ height: 26, width: 32, backgroundColor: "#FFD465", top: 10, left: 10 }}>
                 <Image source={require('../images/watch.png')} />
              </View>
               <Text style={{ color: "#222", fontSize: 18, fontWeight: 600, left: 50, top: -15 }}>303</Text>
               <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, left: 12, top: -10 }}>Subway Series</Text>
               <View style={{ height: 57, width: 71, top: -57, left: 109 }}>
                 <Image source={require('../images/Vector39.png')} />
               </View>
             </View>
             <View style={{ height: 71, width: 160, backgroundColor: '#00933B', left: 185, top: -126, borderRadius: 8 }}>

               <View style={{ height: 26, width: 32, backgroundColor: "#00933B", top: 10, left: 10 }}>
                 <Image source={require('../images/ok.png')} />
               </View>
               <Text style={{ color: "#FFF", fontSize: 18, fontWeight: 600, left: 50, top: -15 }}>303</Text>
               <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, left: 12, top: -10 }}>Subway Series</Text>
               <View style={{ height: 57, width: 71, top: -57, left: 109 }}>
                 <Image source={require('../images/Vector36.png')} />
               </View>
            </View>

          </View>

           <View style={{ height: 222, width: 350, backgroundColor: "#FFF", borderRadius: 16, borderWidth: 1, borderColor: "#00933B",marginVertical:15 }}>
             <View style={{ height: 48, backgroundColor: "green", borderTopLeftRadius: 16, borderTopRightRadius: 16, }}>
              <TouchableOpacity style={{ width: 25, height: 25, left: 25, top: 12 }}>
                 <Image source={require('../images/calendar.png')} />
               </TouchableOpacity>

               <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, left: 64, top: -10 }}>Upcoming schedule</Text>

             </View>
             <TouchableOpacity style={{ width: 20, height: 20, left: 25, top: 17 }} >
              <Image source={require('../images/DD1.png')} />
             </TouchableOpacity >
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#222", left: 64, top: -3 }}>02 June 2023</Text>
            <TouchableOpacity style={{ width: 20, height: 20, left: 173, top: -27 }}  onPress={() => navigation.navigate('Edithomepage', { name: 'Edithomepage' })} >
               <Image source={require('../images/DD2.png')} />
             </TouchableOpacity>
             <TouchableOpacity style={{ width: 20, height: 20, left: 25 }}>
               <Image source={require('../images/doth.png')} />
             </TouchableOpacity>
             <Text style={{ fontSize: 14, fontWeight: 400, color: "#222", left: 50, top: -25 }}>iD #4583</Text>
             <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", left: 50, top: -25 }}>wed, 03 June (8:00am-2:30pm) 6:30 hrs</Text>
             {/* <TouchableOpacity style={{ width: 20, height: 20, left: 25, top: -10 }}>
               <Image source={require('../images/doth.png')} />
             </TouchableOpacity>
             <Text style={{ fontSize: 14, fontWeight: 400, color: "#222", left: 50, top: -35 }}>iD #4583</Text>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", left: 50, top: -35 }}>wed, 03 June (3:30am-6:00pm) 2:30 hrs</Text> */}

             <TouchableOpacity style={{ width: 20, height: 20, left: 305, top: -105 }}>
               <Image source={require('../images/calenedit.png')} />
             </TouchableOpacity>
           </View>

           <View style={{ height: 222, width: 350, backgroundColor: "#FFF", borderRadius: 16, borderWidth: 1, borderColor: "#00933B" }}>
             <View style={{ height: 48, backgroundColor: "green", borderTopLeftRadius: 16, borderTopRightRadius: 16, }}>
             <Text style={{ color: "#FFF", fontSize:14, fontWeight: 500, left: 64, top: 12 }}>Guest Feedback</Text>
             <TouchableOpacity style={{ width: 20, height: 20, left: 25, top: -10 }}>
               <Image source={require('../images/profiletxt.png')} />
             </TouchableOpacity>

            </View>
            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, left: 25, top: 15, }}>One of the footloose was missing the cheese.</Text>
             <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, left: 25, top: 17 }}> I was disappointed with that.</Text>
             <View style={{ height: 27, width: 89, backgroundColor: "#F1F1F1", left: 25, top: 40, borderRadius: 8, alignItems: "center", }}>
               <Text style={{ color: "#222", fontSize: 10, fontWeight: 500, top: 5 }}>Shop: #4583</Text>
             </View>
             <TouchableOpacity style={{ width: 24, height: 22, left: 130, top: 15 }}>
               <Image source={require('../images/like.png')} />
             </TouchableOpacity>
             <TouchableOpacity style={{ width: 24, height: 22, left: 162, top: -5 }}>
               {/* <Image source={require('../images/like1.png')} /> */}
               <Image source={require("../images/like1.png")}/>
             </TouchableOpacity>
             <Text style={{ left: 222, color: "#222", fontSize: 12, fontWeight: 500, top: -25, left: 210, }}>11:30am 1/june/2023</Text>
           </View>
           


      </ScrollView>
      </View>

      <View style={{ flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

        <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
          <Image source={require('../images/tab1.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('MySchedulepage', { name: 'MySchedulepage' })}>
          <Image source={require('../images/tab3.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('ShopSchedule1page', { name: 'ShopSchedule1page' })}>
          <Image source={require('../images/tab4.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
          <Image source={require('../images/tab6.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
          <Image source={require('../images/tab5.png')} />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aaa: {
    flex: 8,
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    justifyContent: "center",
    flexDirection: "column",
    // borderWidth: 1,
    borderTopColor: "#00933B",
    borderBottomColor: "#F7F8FA",
    
  
    
   }
});

export default Home;


