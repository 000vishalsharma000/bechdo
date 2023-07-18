import React, {useState} from 'react';
import { FlatList,  StyleSheet, View } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';



const initialMessages=[
    {
        id:1,
        title: 'T1 jkew hfg jwehf weuyf bew8ygf3oefgowq3gf3pf8y3weq d34fbhu 3cqhw',
        description: 'D1    wekgfi 3ygf3q yefd ywehdvewo8dgi we7yfdyedykwvfw e7fyge3hfv ewwty',
        image: require('../assets/my_img2.jpg')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/my_img2.jpg')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages]=useState(initialMessages);
    const [refreshing, setRefreshing] =useState(false);
    
    const handleDelete= (message)=>{
        //delete the msg from messages 
        const newMessages=messages.filter((m) => m.id!==message.id)
        setMessages(newMessages);
        // call the server 

    }

    return (
        
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message=>message.id.toString()}
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=> console.log("msg selected", item)}
                        renderRightActions={()=><ListItemDeleteAction onPress={() =>handleDelete(item)}/>}
                        />
                    }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id:2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/my_img2.jpg')
                        }
                    ])
                }}

                

                    />
        </Screen>
        

    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;