import React from 'react';
import { 
    Text,
    Image, 
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export const ListItem = ({ title, author, imageURL, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Photo', {imageURL})}>
                <Image 
                        source={{
                            uri: imageURL
                        }}
                        style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Author: {author}</Text>
                <Text style={styles.info}>Name of image: {title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(3, 3, 3, .2)',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10
    },
    image: {
        width: 45,
        height: 45
    },
    title: {
        color: 'rgba(0, 0, 0, .85)',
        fontSize: 16
    },
    info: {
        color: 'rgba(0, 0, 0, .6)',
        fontSize: 12 
    }
});


