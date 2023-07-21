import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native';

const Messageshow = ({ navigation }) => {
    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}
        >

            <View style={{ flex: 1, backgroundColor: '#FFF', flexDirection: "row", alignItems: "center", paddingHorizontal: 12 }}>

                <TouchableOpacity style={{ width: 36, height: 34, top: 5 }} onPress={() => navigation.navigate('profilepage', { name: 'profilepage' })}>
                    <Image source={require('../images/leftarrow.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#222", fontSize: 18, fontWeight: 400, width: 118, height: 24, left: 20, top: 5 }}>Message</Text>

            </View>



            <View style={{ flex: 6, flexDirection: "column", }}>

                <ScrollView>

                    <View style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
                        <View>
                            <Text style={{ color: "#222", fontSize: 14, paddingBottom: 10, fontWeight: 600, }}>New</Text>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ height: 42, width: 42, }}>

                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>
                            <View style={{ height: 42, width: 42, }}>
                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png',)} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                    </View>

                    <View style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
                        <View>
                            <Text style={{ color: "#222", fontSize: 14, paddingBottom: 10, fontWeight: 600 }}>Yesterday</Text>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ height: 42, width: 42, }}>

                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>
                            <View style={{ height: 42, width: 42, }}>
                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png',)} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>
                            <View style={{ height: 42, width: 42, }}>
                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png',)} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                    </View>

                    <View style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
                        <View>
                            <Text style={{ color: "#222", fontSize: 14, paddingBottom: 10, fontWeight: 600 }}>week ago</Text>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ height: 42, width: 42, }}>

                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>
                            <View style={{ height: 42, width: 42, }}>
                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png',)} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingTop: 10 }}>
                            <View style={{ height: 42, width: 42, }}>
                                <Image source={require('../images/E000.png')} />
                            </View>
                            <TouchableOpacity style={{ height: 24, width: 24, left: -33, top: 8 }}>
                                <Image source={require('../images/clander000.png',)} />
                            </TouchableOpacity>
                            <Text style={{ color: "#222", fontSize: 13, fontWeight: 400, }}>Your Weekly Schedule{"\n"}at Subway #4583 for Week ......</Text>
                            <Text style={{ color: "#222", fontSize: 12, fontWeight: 400, paddingTop: 20, paddingLeft: 30 }}>10:30 am</Text>
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
        backgroundColor: "#FFFFFF"
    },
});

export default Messageshow;