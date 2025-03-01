import { View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer';

const PlaceholderImage = require('../../assets/images/pdp.png');

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [username, setUsername] = useState('');

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('Sélectionnez une image');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView 
                    contentContainerStyle={styles.scrollContent} 
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageContainer}>
                        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
                    </View>

                    <View style={styles.footerContainer}>
                        <Button theme="primary" label="Choisir une photo" onPress={pickImageAsync} />
                        <TextInput 
                            style={styles.input} 
                            placeholder="Pseudo" 
                            placeholderTextColor="#888" 
                            value={username} 
                            onChangeText={setUsername} 
                        />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center', // Centre tout dans l'écran
        alignItems: 'center',
        paddingBottom: 20, // Pour éviter que le clavier cache l'input
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20, // Espace pour éviter l'écrasement
    },
    footerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#000',
        width: 320,
        height: 68,
        borderRadius: 10,
        textAlign: 'center',
    },
});

