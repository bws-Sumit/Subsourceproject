




import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, TextInput, onChangeNumber, onPress, Dimensions } from 'react-native';

const Profile = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>

            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "coloum", justifyContent: "space-evenly" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ height: 50, width: 50, backgroundColor: "red", borderRadius: 25, borderColor: "#00933B", marginHorizontal: 20, marginTop: 20 }}>
                        <Image source={require("../images/Ellipse.png")} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 22, fontWeight: 600, marginTop: 25 }}>Vanesa Garcia{"\n"}<Text style={{ color: "#222", fontSize: 14, fontWeight: 400, }} >Manager</Text> </Text>
                </View>


            </View>

            <View style={styles.aaa}>
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row", }}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/profile.png')} />
                    </View>
                    <TouchableOpacity>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20 }}>Profile</Text>
</TouchableOpacity>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:210}} onPress={() => navigation.navigate('Profiledatashowpage', { name: 'Profiledatashowpage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: '#F0F0F0', width: 345,}} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row",}}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/email.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20}}>Message</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:190}} onPress={() => navigation.navigate('Messageshowpage', { name: 'Messageshowpage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                  

                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0', width: 345 }} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/shc.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20 }}>My Schedule</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:163}} onPress={() => navigation.navigate('MySchedulepage', { name: 'MySchedulepage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0',  width: 345 }} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/shop.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20 }}>Shop Schedule</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:147 }} onPress={() => navigation.navigate('ShopSchedule1page', { name: 'ShopSchedule1page' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0', width: 345 }} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>

                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/leave.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20  }}>Leave Request</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:150}} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0',  width: 345 }} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/avable.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400,marginHorizontal:20  }}>Availbility</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:193 }} onPress={() => navigation.navigate('Availbilitypage', { name: 'Availbilitypage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                 
                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0', width: 345 }} />
                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/help.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400, marginHorizontal:20 }}>Help And Support</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:130  }} onPress={() => navigation.navigate('ShopeSchedulepage', { name: 'ShopeSchedulepage' })}>
                        <Image source={require('../images/outside.png')} />
                    </TouchableOpacity>
                   
                </View>
                <View style={{ height: 1, backgroundColor: '#F0F0F0',  width: 345, }} />

                <View style={{ height: 25, width: 350, backgroundColor: "#F7F8FA", flexDirection: "row" }}>

                    <View style={{ width: 25, height: 25, }}>
                        <Image source={require('../images/logout.png')} />
                    </View>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 400, marginHorizontal:20}}>Logout</Text>
                    <TouchableOpacity style={{ width: 25, height: 25,marginHorizontal:210 }}>
                        <Image source={require('../images/outside.png',)} />
                    </TouchableOpacity>
                </View>
             
            </View>


            <View style={{
                flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16
                , shadowColor: 'black', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10,
            }}>

                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
                    <Image source={require('../images/HOMEBB.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('MySchedulepage', { name: 'MySchedulepage' })}>
                    <Image source={require('../images/tab3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('ShopSchedule1page', { name: 'ShopSchedule1page' })}>
                    <Image source={require('../images/tab4.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }}  onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
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
        backgroundColor: "#F7F8FA",

    },
    aaa: {
        flex: 6,
        flexDirection: "column",
        borderTopColor: "#00933B",
        borderBottomColor: "#F7F8FA",
        alignItems: "center",
        justifyContent:"space-evenly",
        // paddingVertical: 50,
        paddingBottom:50


    },

    input: {
        height: 230,
        width: 343,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        top: 16,
        borderRadius: 16,
        paddingBottom: 180,
        paddingLeft: 20



    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        // padding: 10,
        width: 90,
        height: 26,
        borderRadius: 4,
        alignItems: 'center',
        left: 16,
        top: 30,
    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        // padding: 10,
        width: 90,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        left: 16,
        top: 45,
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 75,
        height: 26,
        borderRadius: 8,
        alignItems: 'center',
        left: 10,
        borderWidth: 1,
        marginRight: 200,
        borderColor: "#00933B"
    },
});

export default Profile;









