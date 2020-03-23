import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { hp, wp } from '../helpers/Responsive';
import { AyatServices } from '../services/AyatServices';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob'

const { height } = Dimensions.get('screen');
export class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickableA: false,
            clickableB: false,
            clickableC: false
        }
    }

    componentDidMount() {
        this.createTable();
    }

    createTable = async () => {
        try {
            await AyatServices();
        } catch (error) {
            console.warn(error)
        }
    }

    toListSurah = (status) => {
        this.setState({ clickableA: status });
        setTimeout(() => {
            this.setState({ clickableA: false });
            this.props.navigation.navigate('DashboardScreen');
        }, 1000);
    }

    toSearchSurah = (status) => {
        this.setState({ clickableB: status });
        setTimeout(() => {
            this.setState({ clickableB: false });
            this.props.navigation.navigate('SearchSurahScreen');
        }, 1000);
    }

    toRecord = (status) => {
        this.setState({ clickableC: status });
        setTimeout(() => {
            this.setState({ clickableC: false });
            this.props.navigation.navigate('RecordScreen');
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        animation="bounceIn"
                        duration={1500}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View
                    animation="fadeInUp"
                    duration={1000}
                    style={styles.footer}
                >
                    <View style={styles.title}>
                        <Text style={styles.text}>Quran Bionic</Text>
                    </View>
                    <View style={styles.body}>
                        <Animatable.View animation={this.state.clickableA ? "bounce" : ""} duration={1500}>
                            <TouchableOpacity style={styles.box} onPress={() => this.toListSurah(true)}>
                                <Icon
                                    name="quran"
                                    size={height * 0.1}
                                    color="#EAC153"
                                />
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View animation={this.state.clickableB ? "bounce" : ""} duration={1500}>
                            <TouchableOpacity style={styles.box} onPress={() => this.toSearchSurah(true)}>
                                <Icon
                                    name="search-minus"
                                    size={height * 0.1}
                                    color="#EAC153"
                                />
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View animation={this.state.clickableC ? "bounce" : ""} duration={1500}>
                            <TouchableOpacity style={styles.box} onPress={() => this.toRecord(true)}>
                                <Icon
                                    name="save"
                                    size={height * 0.1}
                                    color="#EAC153"
                                />
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                    <View style={styles.banner}>
                        <AdMobBanner
                            adSize="fullBanner"
                            adUnitID="ca-app-pub-9804721901768342/1313101307"
                        />
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

const height_logo = height * 0.7 * 0.4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAC153"
    },
    header: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1.5,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        flexDirection: "column"
    },
    logo: {
        height: height_logo,
        width: height_logo
    },
    title: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    banner: {
        position: "absolute",
        bottom: 0,
        height: hp(7.5),
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: height * 0.04,
        fontWeight: "400",
        color: "#EAC153",
        fontFamily: "firasanscondensed-eight"
    },
    box: {
        height: hp(15),
        width: wp(30),
        marginHorizontal: 2,
        borderRadius: 20,
        elevation: 1,
        borderColor: "#EAC153",
        borderWidth: 0.1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default SplashScreen