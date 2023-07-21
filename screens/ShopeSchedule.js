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
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>

                <TouchableOpacity style={{ width: 36, height: 34, }} onPress={() => navigation.navigate('Homepage', { name: 'Homepage' })} >
                    <Image source={require('../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#222222', fontSize: 18, fontWeight: 400, paddingLeft: 10 }}>
                    Contact Support
                </Text>

            </View>

            <View style={styles.aaa}>

                <Text style={{ color: '#444', fontSize: 14, fontWeight: 400, width: 343, paddingLeft: 20, marginTop: 20 }}>
                    Please describe the issue you are currently{'\n'}
                    running into. If
                    possible, please include steps to{'\n'}
                    reproduce so that we can
                    better assist you.
                </Text>

                <View style={{ alignSelf: 'center', }}>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Write Here......."
                        keyboardType="text"
                    />
                </View>
                <View style={{ width: 78, height: 18, backgroundColor: 'green,', marginLeft: 20, marginTop: 30 }}>
                    <Text
                        style={{
                            color: '#444',
                            fontSize: 12,
                            fontWeight: 400,
                        }}>
                        Attachment*
                    </Text>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text
                            style={{ color: '#444', fontSize: 12, fontWeight: 500, top: 5, }}>
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
                            marginLeft: 15,
                            marginTop: 15
                        }}>
                        No File Chosen
                    </Text>
                </View>
                <TouchableOpacity style={styles.button1} onPress={onPress}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: 600,
                            top: 10,
                        }}>
                        Send
                    </Text>
                </TouchableOpacity>


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA"
    },
    aaa: {
        flex: 7,
        backgroundColor: "#F7F8FA",
        flexDirection: "column",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderWidth: 1,
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

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: 90,
        height: 26,
        borderRadius: 4,
        marginTop: 10,
        borderColor: "#444444",
        borderWidth: 1
    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        width: 90,
        height: 40,
        borderRadius: 8,
        marginLeft: 20,
        marginTop: 20

    },
});

export default ShopeSchedule;
