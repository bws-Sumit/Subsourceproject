import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, TextInput, onChangeNumber, Dimensions, onPress, Alert, Modal, } from 'react-native';

const Availbility = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [checked, setChecked] = React.useState('Apple');

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "row", alignItems: "center", paddingLeft: 20 }}>

                <TouchableOpacity style={{ width: 36, }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>
                    <Image source={require('../images/leftarrowss.png')} />
                </TouchableOpacity>
                <View style={{ width: 255, height: 44, backgroundColor: "green", borderRadius: 35, margin: 15 }}>
                    <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 600, width: 103, height: 16, left: 20, top: 12 }} onPress={() => navigation.navigate('Leaverequestpage', { name: 'Leaverequestpage' })}>Leave Request</Text>
                    <View style={{ width: 117, height: 38, backgroundColor: "#FFFFFF", borderRadius: 35, left: 135, top: -13 }}>
                        <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, width: 71, height: 21, left: 30, top: 10 }}>Availbility</Text>
                    </View>
                </View>
            </View>



            <View style={styles.aaa}>
                <ScrollView>
                    <View style={{ width: 343, height: 583, backgroundColor: "#F7F8FA", borderRadius: 8, alignSelf: "center", borderWidth: 1, borderColor: "#00933B" }}>
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
                            <TouchableOpacity style={{ width: 22, height: 28, alignSelf: "center", left: -15 }} onPress={() => setModalVisible(true)}>
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
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>

                                <View style={{ height: 42, backgroundColor: "#00933B", width: 291, borderTopRightRadius: 20, borderTopLeftRadius: 20, top: -35, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#FFF", paddingLeft: 20 }}>06 June 2023</Text>
                                    <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => setModalVisible(!modalVisible)}>
                                        <Image source={require('../images/whitecross.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ color: "#FFFFFF", flexDirection: "column", }}>
                                    <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", }}>Choose Available hours</Text>
                                    <View style={{ flexDirection: "row" }}>

                                        <RadioButton style={{}}

                                            value="Apple"
                                            status={checked === 'Apple' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                                            onPress={() => setChecked('Apple')} //when pressed, set the value of the checked Hook to 'Apple'
                                        />
                                        <Text style={{ color: "black", paddingTop: 8 }}>Any hours</Text>
                                        <RadioButton
                                            value="Samsung"
                                            status={checked === 'Samsung' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('Samsung')}
                                        />
                                        <Text style={{ color: "black", paddingTop: 8 }}>Custom</Text>

                                    </View>
                                    <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", paddingTop: 5 }}>Time period :</Text>

                                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={styles.button11} >
                                            <Text
                                                style={{
                                                    color: '#666666',
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    alignSelf: "center",



                                                }}>
                                                6:00am
                                            </Text>
                                        </TouchableOpacity>

                                        <View style={{ width: 12, paddingTop: 30, paddingLeft: 10 }}><Image source={require('../images/sort.png')} /></View>

                                        <TouchableOpacity style={styles.button22}>
                                            <Text
                                                style={{
                                                    color: '#666666',
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                }}>
                                                11:00am
                                            </Text>
                                        </TouchableOpacity>
                                    </View>



                                    <View style={{ flexDirection: "row", }}>

                                        <TouchableOpacity style={styles.button21}  onPress={() => setModalVisible(!modalVisible)}>
                                            <Text
                                                style={{
                                                    color: '#FFF',
                                                    fontSize: 16,
                                                    fontWeight: 600,



                                                }}>
                                                Confirm
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>


                            </View>
                        </View>
                    </Modal>
                </View>
            </View>


            <View style={{
                flex: 1, backgroundColor: '#FFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16
                , shadowColor: 'black', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10,
            }}>

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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        top: -125


    },
    modalView: {
        margin: 20,
        width: 291,
        height: 310,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: "column"
    },
    button321: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button21: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        padding: 8,
        width: 107,
        height: 42,
        borderRadius: 8,

        // left: 16,
        // top: 45,
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
        backgroundColor: '#F7F7F7',
        padding: 8,
        width: 107,
        height: 42,
        borderRadius: 8,

        // left: 16,
        // top: 45,

    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    radioOuter: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
    },
    button11: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // padding: 10,
        width: 102,
        height: 40,
        borderRadius: 8,
        borderColor: "#999999",
        borderWidth: 1,
        padding: 8,
        marginTop: 10,


    },
    button22: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: 102,
        height: 40,
        borderRadius: 8,
        borderColor: "#999999",
        borderWidth: 1,
        marginTop: 10,
        margin: 20,


        // left: 16,
        // top: 45,
    },
});

export default Availbility;







