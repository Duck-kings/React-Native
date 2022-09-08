import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const Photo = ({ route }) => {
    return (
            <View style={styles.container}>
                <Image 
                    source={{
                        uri: route.params.imageURL
                    }}
                    style={styles.image}
                    resizeMode='stretch'
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    image: {
        flex: 1,
        width: null,
        height: null
    }
});


