import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from './ListItem';
import { urlParse } from '../utils/urlParse';
import { fetchPhotos } from '../redux/slices/photoSlice';

export const List = ({ navigation }) => {
    const { photos, isLoading } = useSelector(state => state.photoReducer);
    const dispatch = useDispatch();
    
    return (
        <View>
            <FlatList
                refreshControl={
                    <RefreshControl 
                        refreshing={isLoading} 
                        onRefresh={() => {dispatch(fetchPhotos())}}
                    />} 
                data={photos} 
                renderItem={({ item }) => {
                    const author = urlParse(item.urls.regular);

                    return (<ListItem 
                                imageURL={item.urls.regular}
                                title={author} 
                                author={item.user.name}
                                navigation={navigation} 
                            />);
                }} 
            />
        </View>
    )
}

