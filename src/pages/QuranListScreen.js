import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import { hp, wp } from '../helpers/Responsive';
import { AyatServices, getListAyat, RecordAyat, insertAyatToDatabase } from '../services/AyatServices';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Sound from 'react-native-sound';
import {
    AdMobInterstitial
} from 'react-native-admob'
Sound.setCategory('PlayAndRecord', true);
Sound.setActive(true);

const { height } = Dimensions.get('screen');
export class QuranListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ayat: [],
            isLoading: false,
            isPlay: false
        }
    }

    componentWillMount() {
        this.getInformation()
    }

    componentWillUnmount() {
        // Display an interstitial
        AdMobInterstitial.setAdUnitID('ca-app-pub-9804721901768342/2941877745');
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }

    getInformation = async () => {
        const { nomor } = this.props.navigation.state.params;
        try {
            this.setState({ isLoading: true })
            await AyatServices();
            await RecordAyat();
            let data = await getListAyat(nomor);
            if (data) {
                this.setState({
                    ayat: data,
                    isLoading: false
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    onSave = async (item) => {
        const { nomor, asma, arti } = this.props.navigation.state.params;
        try {
            await insertAyatToDatabase(nomor, item.nomor, asma, arti, item.ar);
            ToastAndroid.show('Ayat berhasil disimpan!', ToastAndroid.SHORT);
        } catch (error) {
            console.warn(error)
        }
    }

    render() {
        const { asma, arti } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header_title}>{asma}</Text>
                    <Text style={styles.header_meaning}>( {arti} )</Text>
                </View>
                <Animatable.View style={styles.scrollview} animation="fadeInUp" duration={1000}>
                    {this.state.isLoading ?
                        <View style={styles.indicator}>
                            <ActivityIndicator size="large" color="#EAC153" size={hp(15)} />
                        </View> :
                        <FlatList
                            data={this.state.ayat}
                            horizontal={false}
                            renderItem={({ item }) =>
                                <Animatable.View style={styles.wrapper} animation="zoomIn" duration={1000}>
                                    <TouchableOpacity style={styles.content} onPress={() => this.onSave(item)}>
                                        <Text style={styles.text}>{item.ar}</Text>
                                        <Text style={styles.text_meaning}>{item.id}</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            }
                            keyExtractor={item => item.ar}
                        />
                    }
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
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: hp(2),
        borderBottomRightRadius: hp(2)
    },
    scrollview: {
        flex: 0.8,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: "column"
    },
    wrapper: {
        flexDirection: "row",
    },
    content: {
        marginBottom: hp(1),
        marginTop: hp(1),
        height: "auto",
        paddingVertical: 10,
        width: "100%",
        backgroundColor: "white",
        elevation: 0.2,
        borderBottomWidth: 0.2,
        borderColor: "#EAC153",
        borderRadius: hp(1),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: hp(1)
    },
    text: {
        fontSize: wp(6),
        fontFamily: "firasanscondensed-extralight"
    },
    text_meaning: {
        fontSize: wp(4),
        textAlign: "right",
        fontFamily: "firasanscondensed-extralight"
    },
    content_header: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    content_body: {
        flex: 0.5,
        backgroundColor: "#dbd2b2",
        borderBottomLeftRadius: hp(1),
        borderBottomRightRadius: hp(1)
    },
    title_text: {
        fontSize: hp(4)
    },
    meaning_text: {
        fontSize: hp(2)
    },
    header_title: {
        fontSize: wp(8),
        fontFamily: "firasanscondensed-extralight"
    },
    header_meaning: {
        fontSize: wp(4),
        fontFamily: "firasanscondensed-extralight"
    },
    indicator: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default QuranListScreen;
