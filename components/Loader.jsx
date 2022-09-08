import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native';

export const Loader = ({ text='Loading...', color }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={color}/>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: '600'
    }
});
