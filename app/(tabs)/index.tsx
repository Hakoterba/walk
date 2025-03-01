import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image'; 
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

const PlaceholderImage = require('@/assets/images/ringDay.png');
const PlaceholderImage2 = require('@/assets/images/ringTotal.png');

export default function Accueil() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
        title: 'Hey ${pseudo} !',  
        });
    }, [navigation]); 

    return (
        <View style={ringDay.container}>
        <View style={ringDay.imageContainer}>
            <Image source={PlaceholderImage} style={ringDay.image} />
            <Image source={PlaceholderImage2} style={ringDay.overlayImage} />
        </View>
        </View>
    );
}

const ringDay = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: "center",     
        backgroundColor: "#1E1E1E"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"     
    },
    image: {
        width: 800, 
        height: 400,
        resizeMode: "contain",
    },
    overlayImage: {
        width: 150, 
        height: 75,
        resizeMode: "contain",
        position: "absolute"
    },
});
