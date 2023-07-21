import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native';

const Message = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}
            >

            <View style={{ flex: 0.5, backgroundColor: '#FFF', flexDirection: "row", alignItems: "center",paddingHorizontal:12 }}>

                <TouchableOpacity style={{ width: 36, height: 34,top:5}} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
                    <Image source={require('../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#222", fontSize: 18, fontWeight: 400, width: 118, height:24,left:20,top:5}}>Message</Text>

            </View>

            <View style={{ flex:1.5, backgroundColor: "#FFF", flexDirection: "row",alignItems:"center",justifyContent:"center"  }}>
                <View style={{}}>
                    <View style={{ height:42, width:42,paddingTop:15,top:-5,left:-10}}>
                        <Image source={require('../images/E000.png')} />
                    </View>
                    <TouchableOpacity style={{ height:24, width:24,top:-23,}}>
                        <Image source={require('../images/clander000.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{width:284,height:48}}>
                    <Text style={{color:"#222",fontSize:16,fontWeight:400,top:-5}}>Your Weekly Schedule at Subway {"\n"} #4583 for Week starting</Text>
                    <Text style={{color:"#222",fontSize:12,fontWeight:400,}}>4583 @ 06/07/2023 | 10:06 am</Text>
                </View>


            </View>


            <View style={styles.aaa}>
                <ScrollView>
                     <View style={{justifyContent:'space-between'}}>
                         <Text style={{color:"#222",fontSize:14,fontWeight:500,width:146,height:21,}}> Dear Vanesa Garcia,</Text>
                         <Text style={{color:"#222",fontSize:14,fontWeight:400,width:314,height:42,top:10}}> Please review below your weekly schedule{"\n"} for week starting 06-07-2023</Text>
                    </View>

                   <View style={{ backgroundColor: "#F7F8FA", borderRadius: 8,borderWidth:1,
                    borderColor:"#00933B",marginTop:20}}>
                  <View style={{width:343,height:42,backgroundColor:"green",borderTopLeftRadius:8,borderTopRightRadius:8,flexDirection:"row",alignItems:"center"}}>
                     <Text style={{color:"#FFF",fontSize:14,fontWeight:600,width:34,height:21,left:16}}>Date</Text>
                     <Text style={{color:"#FFF",fontSize:14,fontWeight:600,width:71,height:21,left:125}}>Availbility</Text>

                  </View>

                  <View style={{width:343,height:60,backgroundColor:"#FFFFFF",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View>

                  <View style={{width:343,height:60,backgroundColor:"#F7F8FA",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View>

                  <View style={{width:343,height:60,backgroundColor:"#FFFFFF",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View>

                  <View style={{width:343,height:60,backgroundColor:"#F7F8FA",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View>
                  <View style={{width:343,height:60,backgroundColor:"#FFFFFF",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View><View style={{width:343,height:60,backgroundColor:"#F7F8FA",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View><View style={{width:343,height:60,backgroundColor:"#FFFFFF",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View><View style={{width:343,height:60,backgroundColor:"#F7F8FA",flexDirection:"row"}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15 }}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View><View style={{width:343,height:60,backgroundColor:"#FFFFFF",flexDirection:"row",borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                     <Text style={{width:71,height:36,color:"#222",fontSize:12,fontWeight:400,left:16,top:12}}> Wed, {'\n'} 06/06/2023</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:18,left:90}}></View>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,left:95,top:12}}> 07:30am - 11:30am</Text>
                     <Text style={{width:129,height:18,color:"#222",fontSize:12,fontWeight:400,top:20,left:-30,top:28}}>12:00pm - 03:00pm</Text>
                     <View style={{height:3,width:3,backgroundColor:"black",borderRadius:5,top:35,left:-171}}></View>
                     {/* <TouchableOpacity style={{ width: 22, height:28,alignSelf:"center",left:-15,}}>
                        <Image source={require('../images/wdot.png')} />
                    </TouchableOpacity> */}
                  </View>

             </View>
                 <View style={{fontSize:14,fontWeight:400,}}>
                 <Text style={{paddingTop:20,color:"#222",}}> Please do not reply to this email. If you have any {"\n"} questions, please contact your manager.</Text>
                <Text  style={{paddingTop:10,color:"#222",}}> Regards,{"\n"} Subsource Virtual Manager</Text>     
                 </View>   
                
                    

                </ScrollView>
            </View>
            <View style={{ flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <Image source={require('../images/tab1.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <Image source={require('../images/tab3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <Image source={require('../images/tab4.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <Image source={require('../images/tab6.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}>
                    <Image source={require('../images/tab5.png')} />
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
        justifyContent: "center",
        flexDirection: "column",
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        // borderRadius:16,
        padding: 6,
        borderWidth:1,
       
        borderTopColor:"#00933B",
        borderBottomColor:"#F7F8FA",
        // marginTop:30
        
    }
});

export default Message;