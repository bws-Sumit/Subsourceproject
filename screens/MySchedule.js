import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView, onChangeNumber, onPress, Dimensions, Alert, Modal, Pressable, useState } from 'react-native';

const MySchedule = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>

            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "row", justifyContent: "space-around", alignItems: "center", }}>


                <TouchableOpacity style={{ width: 25, height: 25, marginRight: 10 }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
                    <Image source={require('../images/lefterro.png')} />
                </TouchableOpacity>

                <Text style={{ color: "#222", fontSize: 18, fontWeight: 400, height: 27, width: 114, marginRight: 150, marginTop: 10 }}>My Schedule</Text>

                <TouchableOpacity style={{ width: 25, height: 25, marginRight: 10 }}>
                    <Image source={require('../images/calenedit.png')} />
                </TouchableOpacity>


            </View>

            <View style={styles.aaa}>
                <ScrollView>
                    <View style={{ height: 129, width: 360, backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, }}>
                        <View style={{ height: 40, width: 360, backgroundColor: "#00933B", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ width: 133, height: 16, color: "#FFF", fontSize: 14, fontWeight: 500, left: 16, top: 10 }}>wed, 06 June 2023</Text>
                            <Text style={{ width: 47, height: 16, color: "#FFF", fontSize: 14, fontWeight: 400, left: 300, top: -5 }}>#4583</Text>
                        </View>

                        <View>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <TouchableOpacity style={{ width: 17, height: 17, left: 232, top: -28, left: 333 }} onPress={() => setModalVisible(true)}>
                                <Image source={require('../images/threedot.png')} />
                            </TouchableOpacity>
                        </View>

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

                                        <View style={{ height: 42, backgroundColor: "#00933B", width: 350, borderTopRightRadius: 20, borderTopLeftRadius: 20, top: -35, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text style={{ fontSize: 14, fontWeight: 600, color: "#FFF", paddingLeft: 20 }}>Open Shift</Text>
                                            <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => setModalVisible(!modalVisible)}>
                                                <Image source={require('../images/whitecross.png')} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ color: "#FFFFFF" }}>
                                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#222", }}>Please confirm that you would like to</Text>
                                            <Text style={{ fontSize: 14, fontWeight: 400, color: "#222", alignSelf: "center" }}> the below shift</Text>

                                            <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", alignSelf: "center", margin: 10 }}>Wednesday , 06 June 2023</Text>
                                            <Text style={{ fontSize: 14, fontWeight: 500, color: "#222", alignSelf: "center" }}>6:00am-10:00amt</Text>

                                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                <TouchableOpacity style={styles.button1} onPress={onPress}>
                                                    <Text
                                                        style={{
                                                            color: '#666666',
                                                            fontSize: 16,
                                                            fontWeight: 600,



                                                        }}>
                                                        Cancel
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.button21} onPress={onPress} onPress={() => setModalVisible(!modalVisible)}>
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

                        <View style={{ top: -35 }}>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <TouchableOpacity style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }} onPress={() => setModalVisible(true)}>
                                <Image source={require('../images/threedot.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: 129, width: 360, backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, marginTop: 20 }}>
                        <View style={{ height: 40, width: 360, backgroundColor: "#00933B", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ width: 133, height: 16, color: "#FFF", fontSize: 14, fontWeight: 500, left: 16, top: 10 }}>wed, 06 June 2023</Text>
                            <Text style={{ width: 47, height: 16, color: "#FFF", fontSize: 14, fontWeight: 400, left: 300, top: -5 }}>#4583</Text>
                        </View>
                        <View>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                        <View style={{ top: -35 }}>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 129, width: 360, backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, marginTop: 20 }}>
                        <View style={{ height: 40, width: 360, backgroundColor: "#00933B", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ width: 133, height: 16, color: "#FFF", fontSize: 14, fontWeight: 500, left: 16, top: 10 }}>wed, 06 June 2023</Text>
                            <Text style={{ width: 47, height: 16, color: "#FFF", fontSize: 14, fontWeight: 400, left: 300, top: -5 }}>#4583</Text>
                        </View>
                        <View>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                        <View style={{ top: -35 }}>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                    </View>
                    <View style={{ height: 129, width: 360, backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, marginTop: 20 }}>
                        <View style={{ height: 40, width: 360, backgroundColor: "#00933B", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ width: 133, height: 16, color: "#FFF", fontSize: 14, fontWeight: 500, left: 16, top: 10 }}>wed, 06 June 2023</Text>
                            <Text style={{ width: 47, height: 16, color: "#FFF", fontSize: 14, fontWeight: 400, left: 300, top: -5 }}>#4583</Text>
                        </View>
                        <View>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                        <View style={{ top: -35 }}>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                    </View>

                    <View style={{ height: 129, width: 360, backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, marginTop: 20 }}>
                        <View style={{ height: 40, width: 360, backgroundColor: "#00933B", borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ width: 133, height: 16, color: "#FFF", fontSize: 14, fontWeight: 500, left: 16, top: 10 }}>wed, 06 June 2023</Text>
                            <Text style={{ width: 47, height: 16, color: "#FFF", fontSize: 14, fontWeight: 400, left: 300, top: -5 }}>#4583</Text>
                        </View>
                        <View>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
                        </View>

                        <View style={{ top: -35 }}>
                            <View style={{ width: 10, height: 10, left: 32, top: 18, left: 16 }}>
                                <Image source={require('../images/greendot123.png')} />
                            </View>
                            <Text style={{ top: 3, left: 34, color: "#222", fontSize: 14, fontWeight: 400 }}>6:00am-10:00am</Text>
                            <Text style={{ top: -15, left: 220, color: "#222", fontSize: 14, fontWeight: 400 }}>4:00 hrs</Text>
                            <View style={{ width: 17, height: 17, left: 232, top: -30, left: 333 }}>
                                <Image source={require('../images/threedot.png')} />
                            </View>
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
                    <Image source={require('../images/LIGHT4.png')} />
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
        height: height
    },
    aaa: {
        flex: 6,
        flexDirection: "column",
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
        backgroundColor: '#F7F7F7',
        padding: 8,
        width: 107,
        height: 42,
        borderRadius: 8,

        // left: 16,
        top: 45,

    },
    button21: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        padding: 8,
        width: 107,
        height: 42,
        borderRadius: 8,

        // left: 16,
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
        top: -160


    },
    modalView: {
        margin: 20,
        width: 350,
        height: 274,
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
});

export default MySchedule;








