import React from 'react';
import { Image, StyleSheet, TouchableHighlight,  View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, subTitle, image,  IconComponent ,onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight 
        onPress={onPress}
        underlayColor={colors.light}>
            <View style={styles.container}>
                <View style={styles.graphicContainer}>
                {IconComponent}
                {image && <Image source={image} style={styles.image}></Image>}
                </View>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
            </View>
        </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        // marginRight: 10
    },
    graphicContainer:{
        justifyContent:"center"
    },
    detailsContainer:{
        marginLeft: 10,
        justifyContent:"center",
        flex: 1
    },
    title:{
        fontWeight: "600",
    },
    subTitle:{
        color : colors.medium,
    },
})
export default ListItem;