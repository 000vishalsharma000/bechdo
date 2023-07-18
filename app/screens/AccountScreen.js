import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';



import useAuth from '../auth/useAuth';

const menuItems=[
    {
        title: "my lsitings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }

    },
    {
        title: "my mesages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages",

    }
]

function AccountScreen({navigation}) {

    const {user, logOut} = useAuth();

    // const handleLogOut=()=>{
    //     setUser(null);
    //     authStorage.removeToken();
    // }
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/my_img1.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item})=> 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                 />
                            }
                            onPress={()=> navigation.navigate(item.targetScreen)}
                        />
                    }
                />
                    
            </View>
            <ListItem 
                title="log out"
                IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>}
                onPress={()=> logOut()} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 40
        
    },
    screen:{
        backgroundColor: colors.light,
        paddingTop:10
    }
})
export default AccountScreen;