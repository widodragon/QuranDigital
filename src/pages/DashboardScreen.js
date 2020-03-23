import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { hp, wp } from '../helpers/Responsive';
import { SurahServices, getListSurah } from '../services/SurahServices';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Sound from 'react-native-sound';
import { connect } from "react-redux";
Sound.setCategory('PlayAndRecord', true);
Sound.setActive(true);

const { height } = Dimensions.get('screen');
export class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surah: [],
            isLoading: false,
            isPlay: false
        }
    }

    componentWillMount() {
        this.getInformation()
    }

    getInformation = async () => {
        try {
            this.setState({ isLoading: true })
            await SurahServices();
            let data = await getListSurah();
            if (data) {
                this.setState({
                    surah: data,
                    isLoading: false
                });
            }
        } catch (error) {
            console.warn(error);
        }
    }

    onPlayMusic = (audio, isPlay) => {
        this.setState({ isPlay });
        let sound1 = new Sound(audio, '',
            (error, sound) => {
                if (error) {
                    alert('error' + error.message);
                    return;
                }
                sound1.play();
            });
        if (!isPlay) {
            sound1.stop();
        }
    }

    goDetailSurah = (nomor, asma, arti) => {
        this.props.navigation.navigate('QuranListScreen', {
            nomor: nomor,
            asma: asma,
            arti: arti
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Daftar Surah</Text>
                </View>
                <Animatable.View style={styles.scrollview} animation="fadeInUp" duration={1000}>
                    {this.state.isLoading ?
                        <View style={styles.indicator}>
                            <ActivityIndicator size="large" color="#EAC153" size={hp(15)} />
                        </View> :
                        <FlatList
                            data={this.state.surah}
                            horizontal={false}
                            renderItem={({ item }) =>
                                <Animatable.View style={styles.wrapper} animation="zoomIn" duration={1000}>
                                    <TouchableOpacity style={styles.content} onPress={() => this.goDetailSurah(item.nomor, item.asma, item.arti)}>
                                        <View style={styles.type}>
                                            {
                                                item.type === "mekah" ? <Icon name="kaaba" size={hp(2)} /> :
                                                    <Icon name="mosque" size={hp(2)} />
                                            }
                                        </View>
                                        <Text style={styles.title_text}>{item.asma}</Text>
                                        <Text style={styles.meaning_text}>( {item.arti} )</Text>
                                    </TouchableOpacity>
                                    <View style={styles.wrapper_sidebar}>
                                        <TouchableOpacity style={styles.sidebar} onPress={() => this.onPlayMusic(item.audio, !this.state.isPlay)}>
                                            <Icon name="volume-up" size={hp(4)} />
                                        </TouchableOpacity>
                                    </View>
                                </Animatable.View>
                            }
                            keyExtractor={item => item.asma}
                        />}
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
        paddingBottom: 0,
        marginTop: hp(1),
        height: hp(15),
        width: "70%",
        backgroundColor: "white",
        elevation: 0.2,
        borderWidth: 0.2,
        borderColor: "#EAC153",
        marginHorizontal: wp(2),
        borderRadius: hp(1),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper_sidebar: {
        height: hp(15),
        width: hp(10),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp(2),
        marginBottom: hp(1),
        marginTop: hp(1)
    },
    sidebar: {
        height: hp(10),
        width: hp(10),
        borderRadius: hp(5),
        elevation: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: wp(6),
        color: "white",
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
    type: {
        position: "absolute",
        top: 0,
        left: 0,
        height: hp(5),
        width: hp(5),
        elevation: 0.3,
        borderTopLeftRadius: hp(1),
        borderBottomRightRadius: hp(1),
        borderWidth: 0.1,
        borderColor: "#EAC153",
        justifyContent: "center",
        alignItems: "center"
    },
    indicator: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

const mapStateToProps = (state) => {
    return {
        common: state.common,
    }
}


export default connect(mapStateToProps)(DashboardScreen)
