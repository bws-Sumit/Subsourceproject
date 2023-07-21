import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, TextInput, onChangeNumber, onPress } from 'react-native';

const ShopeSchedule1 = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 2, backgroundColor: '#FFFFFF', flexDirection: "coloum", alignItems: "center", justifyContent: "space-around" }}>
                <View style={{ flexDirection: "row", paddingRight: 180 }}>
                    <TouchableOpacity style={{ width: 36, height: 34, }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
                        <Image source={require('../images/leftarrow.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#222222', fontSize: 18, fontWeight: 400, paddingLeft: 10, marginTop: 5 }}>
                        Shop Schedule
                    </Text>
                </View>


                <View style={{ flexDirection: "row", backgroundColor: "#FFFFFF", height: 74, width: 350, }}>
                    <ScrollView horizontal={true}>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Mon</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#00933B", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", left: 10, justifyContent: "center" }}>
                            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Tue</Text>
                            <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", left: 20, justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Wed</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", left: 30, justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Thu</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", left: 40, justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Fri</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", left: 50, justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Sat</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>
                        <View style={{ width: 51, height: 74, backgroundColor: "#F7F8FA", borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#00933B", justifyContent: "center" }}>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 31, height: 21, }}>Sun</Text>
                            <Text style={{ color: "#444", fontSize: 14, fontWeight: 500, width: 18, height: 21, }}>19</Text>
                        </View>

                    </ScrollView>
                </View>






            </View>

            <View style={styles.aaa}>
                <ScrollView>

                    <View style={{ flexDirection: "row", height: 26, width: 75, backgroundColor: "#F7F8FA", width: 343, alignItems: "center", justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ color: "#444", fontSize: 12, fontWeight: 400, width: 34, height: 18 }}>Shop:</Text>
                        <View style={styles.button2} onPress={onPress}>
                            <Text
                                style={{ color: '#444', fontSize: 12, fontWeight: 500, alignItems: "center", width: 30, height: 18, top: 5, left: -8 }}>
                                1043
                            </Text>
                            <TouchableOpacity style={{ width: 8, height: 4, top: -8, left: 17 }}>
                                <Image source={require('../images/downerow.png')} />
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity style={{ width: 25, height: 25, }}>
                            <Image source={require('../images/cla123.png')} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: "#EAF2F0", height: 63, width: 343, borderRadius: 8, borderWidth: 1, borderColor: "#00933B", justifyContent: 'space-evenly', }}>

                            <View style={{ width: 36, height: 36, left: 12, top: 14, borderRadius: 4, }}>
                                <Image source={require('../images/p4.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, width: 111, height: 18, left: 64, top: -22 }}>Darlene Robertson</Text>
                                <Text style={{ color: "#222", fontSize: 10, fontWeight: 400, width: 46, height: 15, left: 70, top: -22 }}>Manager</Text>
                            </View>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 500, width: 201, height: 18, left: 64, top: -20 }}>tue, 19 June | 08:00am - 12:00pm</Text>
                        </View>

                    </View>


                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: "#EAF2F0", height: 63, width: 343, borderRadius: 8, borderWidth: 1, borderColor: "#00933B", justifyContent: 'space-evenly' }}>

                            <View style={{ width: 36, height: 36, left: 12, top: 14, borderRadius: 4 }}>
                                <Image source={require('../images/p3.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, width: 111, height: 18, left: 64, top: -22 }}>Leslie Alexander</Text>
                                <Text style={{ color: "#222", fontSize: 10, fontWeight: 400, width: 46, height: 15, left: 60, top: -22 }}>Manager</Text>
                            </View>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 500, width: 201, height: 18, left: 64, top: -20 }}>tue, 19 June | 02:00pm - 04:30pm</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: "#EAF2F0", height: 63, width: 343, borderRadius: 8, borderWidth: 1, borderColor: "#00933B", justifyContent: 'space-evenly' }}>

                            <View style={{ width: 36, height: 36, left: 12, top: 14, borderRadius: 4 }}>
                                <Image source={require('../images/p2.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, width: 111, height: 18, left: 64, top: -22 }}>Annette Black</Text>
                                <Text style={{ color: "#222", fontSize: 10, fontWeight: 400, width: 46, height: 15, left: 45, top: -22 }}>Manager</Text>
                            </View>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 500, width: 201, height: 18, left: 64, top: -20 }}>tue, 19 June | 04:00pm - 10:00pm</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: "#EAF2F0", height: 63, width: 343, borderRadius: 8, borderWidth: 1, borderColor: "#00933B", justifyContent: 'space-evenly' }}>

                            <View style={{ width: 36, height: 36, left: 12, top: 14, borderRadius: 4 }}>
                                <Image source={require('../images/p1.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, width: 111, height: 18, left: 64, top: -22 }}>Guy Hawkins</Text>
                                <Text style={{ color: "#222", fontSize: 10, fontWeight: 400, width: 46, height: 15, left: 45, top: -22 }}>Manager</Text>
                            </View>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 500, width: 201, height: 18, left: 64, top: -20 }}>tue, 19 June | 12:00pm - 02:00pm</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: "#EAF2F0", height: 63, width: 343, borderRadius: 8, borderWidth: 1, borderColor: "#00933B", justifyContent: 'space-evenly' }}>

                            <View style={{ width: 36, height: 36, left: 12, top: 14, borderRadius: 4 }}>
                                <Image source={require('../images/p1.png')} />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, width: 111, height: 18, left: 64, top: -22 }}>Guy Hawkins</Text>
                                <Text style={{ color: "#222", fontSize: 10, fontWeight: 400, width: 46, height: 15, left: 45, top: -22 }}>Manager</Text>
                            </View>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 500, width: 201, height: 18, left: 64, top: -20 }}>tue, 19 June | 12:00pm - 02:00pm</Text>
                        </View>
                    </View>



                </ScrollView>
            </View>


            <View style={{
                flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16
                , shadowColor: 'black', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10,
            }}>

                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
                    <Image source={require('../images/HOMEBB.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('MySchedulepage', { name: 'MySchedulepage' })}>
                    <Image source={require('../images/tab3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('ShopSchedule1page', { name: 'ShopSchedule1page' })}>
                    <Image source={require('../images/LIGHT1.png')} />
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
        backgroundColor: "#F7F8FA"
    },
    aaa: {
        flex: 5,
        backgroundColor: "#F7F8FA",
        flexDirection: "column",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
        borderTopColor: "#00933B",
        borderBottomColor: "#F7F8FA",
        alignItems: "center",

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

export default ShopeSchedule1;
