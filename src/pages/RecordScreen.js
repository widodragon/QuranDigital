import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { hp, wp } from '../helpers/Responsive';
import { getAyatFromDatabase, removeItemFromDatabase } from '../services/AyatServices';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from "react-redux";

const { height } = Dimensions.get('screen');
export class RecordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surah: [],
            isLoading: false,
            isPlay: false
        }
    }

    componentWillMount() {
        this._navListener = this.props.navigation.addListener('didFocus', async () => {
            this.getInformation();
        });
    }

    getInformation = async () => {
        try {
            this.setState({ isLoading: true })
            let data = await getAyatFromDatabase();
            if (data) {
                this.setState({ surah: data, isLoading: false });
            }
        } catch (error) {
            console.log(error);
        }
    }

    goDetailSurah = (item) => {
        this.props.navigation.navigate('QuranListScreen', {
            nomor: item.identity,
            asma: item.asma,
            arti: item.arti
        });
    }

    removeItem = async (item) => {
        try {
            await removeItemFromDatabase(item.identity, item.nomor);
            this.getInformation();
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Record Ayat</Text>
                </View>
                <Animatable.View style={styles.scrollview} animation="fadeInUp" duration={1000}>
                    <FlatList
                        data={this.state.surah}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <Animatable.View style={styles.wrapper} animation="zoomIn" duration={1000}>
                                <View style={styles.wrapper}>
                                    <TouchableOpacity style={styles.content} onPress={() => this.goDetailSurah(item)}>
                                        <Text style={styles.title_text}>{item.asma}</Text>
                                        <Text style={styles.meaning_text}>( {item.arti} )</Text>
                                        <Text style={[styles.meaning_text, { color: "grey" }]}>Posisi pada ayat ke -{item.nomor}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.wrapper_sidebar}>
                                        <TouchableOpacity style={styles.sidebar} onPress={() => this.removeItem(item)}>
                                            <Icon name="trash" size={25} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Animatable.View>
                        }
                        keyExtractor={item => item.nomor}
                    />
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
        width: "75%",
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
        width: "17%",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp(2),
        marginBottom: hp(1),
        marginTop: hp(1)
    },
    sidebar: {
        height: hp(8),
        width: hp(8),
        borderRadius: hp(4),
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
        fontSize: hp(2),
        fontFamily: "firasanscondensed-extralight"
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
    }
});

const mapStateToProps = (state) => {
    return {
        common: state.common,
    }
}


export default connect(mapStateToProps)(RecordScreen)
