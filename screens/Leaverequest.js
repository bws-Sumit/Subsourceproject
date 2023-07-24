import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, TextInput, onChangeNumber, onPress } from 'react-native';

const ShopeSchedule = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 2, backgroundColor: '#FFFFFF', flexDirection: "column", justifyContent: "space-around", }}>
                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity style={{ width: 36, height: 34, marginTop: 5, paddingLeft: 10 }} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })}>
                        <Image source={require('../images/leftarrow.png')} />
                    </TouchableOpacity>

                    <View style={{ width: 255, height: 44, backgroundColor: "green", borderRadius: 35, marginLeft: 30 }}>
                        <View style={{ width: 151, height: 38, backgroundColor: "#FFFFFF", borderRadius: 35, left: 3, top: 3 }}>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 600, width: 103, height: 16, left: 25, top: 10 }}>Leave Request</Text>
                        </View>
                        <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 500, width: 71, height: 21, left: 170, top: -25 }} onPress={() => navigation.navigate('Availbilitypage', { name: 'Availbilitypage' })}>Availbility</Text>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <Text style={{ color: "#222", fontSize: 16, fontWeight: 500, width: 125, height: 24, }}>Apply for leave:</Text>

                    <TouchableOpacity style={{ width: 20, height: 20, marginLeft: 120 }}>
                        <Image source={require('../images/setting.png')} />
                    </TouchableOpacity>
                </View>



            </View>

            <View style={styles.aaa}>


                <View style={{ flexDirection: "coloum", }}>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ paddingHorizontal: 20, color: "#222", fontSize: 13, fontWeight: 400 }}>Begin Date*</Text>
                        <Text style={{ paddingHorizontal: 85, color: "#222", fontSize: 13, fontWeight: 400 }}>End Date*</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", justifyContent: "space-evenly" }}>
                        <View style={{ width: 164, height: 40, backgroundColor: "#FFF", borderRadius: 4, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <Text style={{ color: "#666", fontWeight: 400, fontSize: 12, }}>01/06/2023</Text>
                            <TouchableOpacity style={{ width: 18, height: 18, }}>
                                <Image source={require('../images/claneditlig.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: 163, height: 40, backgroundColor: "#FFF", borderRadius: 4, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <Text style={{ color: "#666", fontWeight: 400, fontSize: 12, }}>01/06/2023</Text>
                            <TouchableOpacity style={{ width: 18, height: 18 }}>
                                <Image source={require('../images/claneditlig.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingHorizontal: 20, color: "#222", fontSize: 13, fontWeight: 400 }}>Reason*</Text>
                    <View style={{ width: 343, height: 40, backgroundColor: "#FFF", borderRadius: 4, flexDirection: "row", alignSelf: "center", alignItems: "center", }}>

                        <Text style={{ color: "#666", fontWeight: 400, fontSize: 12, paddingLeft: 15 }}>Select Reason</Text>
                        <TouchableOpacity style={{ width: 11, height: 6, paddingLeft: 210 }}>
                            <Image source={require('../images/down123.png')} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View>
                    <View>
                        <Text
                            style={{
                                color: '#444',
                                fontSize: 13,
                                fontWeight: 400,
                                marginLeft: 20

                            }}>
                            Attachment*
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.button} onPress={onPress}>
                            <Text
                                style={{ color: '#444', fontSize: 12, fontWeight: 500, }}>
                                Choose file
                            </Text>
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: '#999',
                                fontSize: 12,
                                fontWeight: 400,
                                width: 88,
                                height: 18,
                                alignSelf: "center",
                                marginLeft: 20

                            }}>
                            No File Chosen
                        </Text>
                    </View>

                </View>



                <View style={{}}>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Write Here......."
                        keyboardType="text"
                    />
                </View>


                <TouchableOpacity style={styles.button1} onPress={onPress}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: 600,



                        }}>
                        Apply
                    </Text>
                </TouchableOpacity>
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
                    <Image source={require('../images/tab4.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 20, width: 20 }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
                    <Image source={require('../images/LIGHT2.png')} />
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
        flex: 8,
        backgroundColor: "#F7F8FA",
        flexDirection: "column",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
        borderTopColor: "#00933B",
        borderBottomColor: "#F7F8FA",
        justifyContent: 'space-evenly'



    },
    input: {
        height: 126,
        width: 343,
        // margin: 12,
        borderWidth: 1,
        // padding: 10,
        // top: 50,
        borderRadius: 16,
        paddingBottom: 80,
        paddingLeft: 20,
        alignSelf: "center"
    },
    button: {

        backgroundColor: '#FFF',
        // padding: 10,
        width: 90,
        height: 26,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginTop: 10


    },
    button1: {

        backgroundColor: '#00933B',
        // padding: 10,
        width: 98,
        height: 42,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default ShopeSchedule;
