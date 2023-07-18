import React, { useEffect, useState } from 'react';
import {  FlatList , StyleSheet} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton"
import useApi from '../hooks/useApi';

// const listings =[
//     {
//         id: 1,
//         title: "red jacket for sale",
//         price : 100,
//         image : require('../assets/jacket.jpg')
//     },
//     {
//         id: 2,
//         title: "couch in great condition",
//         price : 100,
//         image : require('../assets/couch.jpg')
//     }
// ]







function ListingScreen({navigation}) {

    const getListingsApi =useApi(listingsApi.getListings)


    useEffect(()=> {
        getListingsApi.request();
    }, []);






    return (
        <>
        <ActivityIndicator visible={getListingsApi.loading} />
        <Screen style={styles.screen}> 
            {getListingsApi.error && <>
                <AppText>couldn't retrieve the listings </AppText>
                <AppButton title ="Retry" onPress={getListingsApi.request}/>
            </>}
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={ ({item}) => 
                    <Card
                        title= {item.title}
                        subTitle={"$"+item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                    }
            />
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding : 10,
        backgroundColor: colors.light

    }
})

export default ListingScreen;