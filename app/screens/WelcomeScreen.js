import React from 'react';
import { ImageBackground , StyleSheet,  View, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';



function WelcomeScreen({navigation}) {
    console.log(require('../assets/background.jpg'))
    return (
        
        
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
        <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../assets/bech_do_transparent.png')}/>
        <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Indias Leading Secondhand Market Place  </Text>
        </View>
        
        </View>

        <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")}/>
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")}/>
        </View>


        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    logo:{
        width:300,
        height: 300,
    },
    logocontainer:{
        position: "absolute",
        top: 70,
        alignItems:"center"

    },
    buttonContainer:{
        padding: 20,
        width: "100%",


    },
    tagline :{
        fontSize: 15,
        fontWeight: '100',
        paddingVertical: 20,
        textAlign:"center"

    },
    taglineContainer:{
        width: "70%"
    }



    
})

export default WelcomeScreen;