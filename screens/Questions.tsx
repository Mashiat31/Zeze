import React, { useEffect, useState, useCallback } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default function Questions({ navigation }: any) {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Mashiat!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Mashiat Lamisa',
                    avatar: 'https://placeimg.com/140/140/any'
                }
            }
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        const mockResponses:any = [{
            _id: '1234',
            createdAt: new Date(),
            text: 'Let me take you to all the Zezes available to help you!',
            user: {
                _id: 2
            }
        }, ...messages]
        setMessages(previousMessages => GiftedChat.append(previousMessages, mockResponses))
    }, [])

    return (
        
        <GiftedChat onLongPress={() => navigation.navigate('Profile')} messages={messages} onSend={messages => onSend(messages)} user={{_id:1}}/>
    )
}