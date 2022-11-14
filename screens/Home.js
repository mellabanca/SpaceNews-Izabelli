import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar,
        Platform, TouchableOpacity, Image, ImageBackground} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <SafeAreaView style={styles.safeArea}/>
                    <ImageBackground source={require("../assets/bg_image.png")}
                                     style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>SpaceNews</Text>
                        </View>
                        <TouchableOpacity style={styles.card}
                                          onPress={()=>this.props.navigation.navigate("ISSLocation")}>
                            <Text style={styles.cardText}>Localização da EEI</Text>
                            <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image style={styles.iconImage}
                                   source={require("../assets/iss_icon.png")}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}
                                          onPress={()=>this.props.navigation.navigate("Meteors")}>
                            <Text style={styles.cardText}>Meteoros</Text>
                            <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                            <Text style={styles.bgDigit}>2</Text>
                            <Image style={styles.iconImage}
                                   source={require("../assets/meteor_icon.png")}></Image>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1 
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "white"
    },
    cardText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})