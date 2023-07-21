import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity,onPress,Image } from 'react-native';

const modle1 = () => {
    return (

        <View style={styles.header}>
            <View style={{ backgroundColor: "#00933B", height: 42, width: 350,borderTopLeftRadius:8,borderTopRightRadius:8,top:-15}}>
                <Text style={{ color: "#FFF", fontSize: 14, fontWeight: 600, width: 74, height: 21,left:16,top:11 }}>Open Shift</Text>
                <View style={{ width: 28, height: 25,top:-20,left:300}}>
                            <Image source={require('../images/crose.png')} />
                </View>
            
            </View>
            <View>
                <Text style={{ color: "#222", fontSize: 14, fontWeight: 400, width: 300, height: 42,left:10 }}>Please confirm that you would like to open</Text>
                <Text style={{ color: "#222", fontSize: 14, fontWeight: 400, width: 300, height: 42,left:80,top:-20, }}>open the below shift.</Text>
                <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, width: 300, height: 42,left:60,top:-20 }}>Wednesday , 06 June 2023</Text>
                <Text style={{ color: "#222", fontSize: 14, fontWeight: 500, width: 300, height: 42,left:100,top:-35 }}>6:00am-10:00am</Text>

                <TouchableOpacity style={styles.button1} onPress={onPress}>
                    <Text
                        style={{
                            color: '#666666',
                            fontSize: 16,
                            fontWeight: 600,
                            top: 10,
                        }}>
                       Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button12} onPress={onPress}>
                    <Text
                        style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: 600,
                            top: 10,
                        }}>
                       Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    header: {

        height: 274,
        width: 350,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: 100,
        borderRadius:8

    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        // padding: 10,
        width: 107,
        height: 42,
        borderRadius: 8,
        alignItems: 'center',
        left: 16,
        top: -25,
    },
    button12: {
        alignItems: 'center',
        backgroundColor: '#00933B',
        // padding: 10,
        width: 107,
        height: 42,
        borderRadius: 8,
        alignItems: 'center',
        left: 180,
        top:-65,
    },
});

export default modle1;