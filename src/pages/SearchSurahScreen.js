import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { hp, wp } from '../helpers/Responsive';
import { AyatServices, getListAyat } from '../services/AyatServices';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Sound from 'react-native-sound';
Sound.setCategory('PlayAndRecord', true);
Sound.setActive(true);

const { height } = Dimensions.get('screen');
export class SearchSurahScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ayat: [],
            isLoading: false,
            isPlay: false,
            text: ""
        }
    }

    onChangeText = (text) => {
        this.setState({ text });
    }

    onPressSearch = async () => {
        try {
            this.setState({ isLoading: true })
            await AyatServices();
            let data = await getListAyat(this.state.text);
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.search_bar}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => this.onChangeText(text)}
                            placeholder="Silahkan masukkan nomor surah..."
                            value={this.state.text}
                            keyboardType="number-pad"
                        />
                        <TouchableOpacity style={styles.search_button} onPress={() => this.onPressSearch()}>
                            <Icon name="search" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
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
                                    <TouchableOpacity style={styles.content} onLongPress={() => this.onSave(item)}>
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
    search_bar: {
        width: "95%",
        height: hp(8),
        borderRadius: 5,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: hp(8),
        width: "85%",
        color: "grey",
        fontSize: hp(2),
        paddingLeft: hp(1.5)
    },
    search_button: {
        height: hp(7),
        width: "15%",
        marginRight: 5,
        borderRadius: 5,
        elevation: 0.5,
        borderWidth: 0.1,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EAC153"
    },
    indicator: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default SearchSurahScreen;
