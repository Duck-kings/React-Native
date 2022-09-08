import React from 'react';
import { View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../components/List';

import { Loader } from '../components/Loader';
import { fetchPhotos } from '../redux/slices/photoSlice';

export const Home = ({ navigation }) => {
    const dispath = useDispatch();
    const { isLoading, isError } = useSelector(state => state.photoReducer);
    
    React.useEffect(() => {
        dispath(fetchPhotos());
    }, []);

    return (
        <View>
            {
                isLoading
                ? <Loader />
                : isError ? Alert.alert('Error', 'Something went wrong... Try later.') : <List navigation={navigation} />
            }
        </View>
    )
}
