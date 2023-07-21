import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native';

const Leaverequestshow = () => {
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "row", justifyContent: 'space-around', alignItems: "center", }}>

                <TouchableOpacity style={{ width: 36, height: 34, left: -10 }}>
                    <Image source={require('../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#222", fontSize: 16, fontWeight: 400, width: 118, height: 24, left: -52 }}>Applied leaves</Text>
                <TouchableOpacity style={{ width: 24, height: 24, }}>
                    <Image source={require('../images/calenedit.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.aaa}>
                <ScrollView>
                    <View style={{ height: 214, width: 334, backgroundColor: "#FFFFFF", borderRadius: 16, borderColor: "#00933b", borderWidth: 1 }}>
                        <View style={{ backgroundColor: "#00933B", paddingTop: 10, paddingLeft: 20, height: 42, borderTopLeftRadius: 16, borderTopRightRadius: 16, }}><Text style={{ color: "#FFF", fontSize: 16, fontWeight: 600, }}>Called in sick</Text></View>
                        <View style={{ backgroundColor: "#FFFFFF", flexDirection: "column", justifyContent: 'space-around', flex: 1, paddingLeft: 20, borderBottomEndRadius: 16, borderBottomStartRadius: 16 }}>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 500 }}> <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Day :</Text> Monday, 19 June 2023</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 500 }}> <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Reason :</Text> Called In Sick</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Attachments :</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Note :</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>status : </Text>
                                <Text style={{ paddingLeft: 132, color: "#222", fontSize: 14, fontWeight: 400 }}>Action :</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 214, width: 334, backgroundColor: "#FFFFFF", borderRadius: 16, borderColor: "#00933b", borderWidth: 1, marginVertical: 30 }}>
                        <View style={{ backgroundColor: "#00933B", paddingTop: 10, paddingLeft: 20, height: 42, borderTopLeftRadius: 16, borderTopRightRadius: 16, }}><Text style={{ color: "#FFF", fontSize: 16, fontWeight: 600, }}>Called in sick</Text></View>
                        <View style={{ backgroundColor: "#FFFFFF", flexDirection: "column", justifyContent: 'space-around', flex: 1, paddingLeft: 20, borderBottomEndRadius: 16, borderBottomStartRadius: 16 }}>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 500 }}> <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Day :</Text> Monday, 19 June 2023</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 500 }}> <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Reason :</Text> Called In Sick</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Attachments :</Text>
                            <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>Note :</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#222", fontSize: 14, fontWeight: 400 }}>status : </Text>
                                <Text style={{ paddingLeft: 132, color: "#222", fontSize: 14, fontWeight: 400 }}>Action :</Text>
                            </View>

                        </View>
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
        backgroundColor: "#FFFFFF"
    },
    aaa: {
        flex: 7,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        flexDirection: "column",
        // padding: 20
 }
});

export default Leaverequestshow;