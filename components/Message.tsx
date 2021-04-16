import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { MessageT } from "../types";
import styles from "../assets/styles";

const Message = ({ image, lastMessage, name, onCoversationPressed }: MessageT) => (
  <TouchableOpacity onPress={() => onCoversationPressed()} style={styles.containerMessage}>
    <Image source={image} style={styles.avatar} />
    <View>
      <Text>{name}</Text>
      <Text style={styles.message}>{lastMessage}</Text>
    </View>
  </TouchableOpacity>
);

export default Message;
