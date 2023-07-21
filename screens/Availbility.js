import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, TextInput, onChangeNumber, onPress, Dimensions } from 'react-native';

const Availbility = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "row",alignItems:"center",paddingLeft:20}}>

                <TouchableOpacity style={{ width: 36, }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
                    <Image source={require('../images/leftarrowss.png')} />
                </TouchableOpacity>
                <View style={{ width: 255, height: 44, backgroundColor: "green", borderRadius: 35,margin:15 }}>
                    <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 600, width: 103, height: 16, left: 20, top: 12 }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>Leave Request</Text>
                    <View style={{ width: 117, height: 38, backgroundColor: "#FFFFFF", borderRadius: 35, left: 135, top: -13 }}>
                        <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, width: 71, height: 21, left: 30, top: 10 }}>Availbility</Text>
                    </View>

                </View>

            </View>

            <View style={styles.aaa}>
                <ScrollView>
                    <View style={{ width: 343, height: 583, backgroundColor: "#F7F8FA", borderRadius: 8, alignSelf: "center",borderWidth:1,borderColor:"#00933B" }}>
                        <View style={{ width: 343, height: 42, backgroundColor: "green", borderTopLeftRadius: 8, borderTopRightRadius: 8, flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 600, width: 34, height: 21, left: 16 }}>Date</Text>
                            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 600, width: 71, height: 21, left: 125 }}>Availbility</Text>
                        </View>
                        <View style={{ width: 343, height: 60, backgroundColor: "#FFFFFF", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 343, height: 60, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: 343, height: 60, backgroundColor: "#FFFFFF", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: 343, height: 60, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 343, height: 60, backgroundColor: "#FFFFFF", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View><View style={{ width: 343, height: 60, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View><View style={{ width: 343, height: 60, backgroundColor: "#FFFFFF", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View><View style={{ width: 343, height: 60, backgroundColor: "#F7F8FA", flexDirection: "row" }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View><View style={{ width: 343, height: 60, backgroundColor: "#FFFFFF", flexDirection: "row", borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                            <Text style={{ width: 71, height: 36, color: "#222", fontSize: 12, fontWeight: 400, left: 16, top: 12 }}> Wed, {'\n'} 06/06/2023</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 18, left: 90 }}></View>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, left: 95, top: 12 }}> 07:30am - 11:30am</Text>
                            <Text style={{ width: 129, height: 18, color: "#222", fontSize: 12, fontWeight: 400, top: 20, left: -30, top: 28 }}>12:00pm - 03:00pm</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: "black", borderRadius: 5, top: 35, left: -171 }}></View>
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15, }}>
                                <Image source={require('../images/wdot.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>

                </ScrollView>
            </View>


            <View style={{
                flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16
                , shadowColor: 'black', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10,
            }}>

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
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
        width: width,
        height: height,
    },
    aaa: {
        flex: 6,
        // backgroundColor: "#F7F8FA",
        flexDirection: "column",
        // borderWidth: 1,
        borderTopColor: "#00933B",
        borderBottomColor: "#F7F8FA",
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

export default Availbility;







