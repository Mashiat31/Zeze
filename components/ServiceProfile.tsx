import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { ServiceProfileItemT } from "../types";
import styles, {
  WHITE,
} from "../assets/styles";
import tailwind from "tailwind-rn";
import { LinearGradient } from 'expo-linear-gradient';

const ServiceProfileItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  flavours,
  name,
}: ServiceProfileItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;
 
  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 90,
      height: hasVariant ? 200 : 420,
      margin: hasVariant ? 0 : 9,
      resizeMode: 'contain'
    },
  ];
  

  const nameStyle = [
    {
      marginLeft: 16,
      bottom: 72,
      position: 'absolute',
      color: "white",
      fontSize: hasVariant ? 15 : 28,
    },
  ];

  return (

    
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      {/* <View style={tailwind('flex-row flex-wrap items-center')}>
      <Icon name="moon" color={FLASH_ACTIONS} size={18} />
      <Text style={tailwind('text-xl font-bold text-center text-purple-600  ml-2')}>Z E Z E</Text>
      <Icon name="star" color={FLASH_ACTIONS} size={14} />
      </View> */}
   
      <View>
        <Image source={image} style={imageStyle} />
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(0,0,0,0.75)']}
          style={{position: 'absolute', bottom: 9, height: 120, width: '88%', marginLeft: 8, borderRadius: 9}}
        >
          <Text style={nameStyle}>{name}</Text>
          { description && (
            <Text style={styles.descriptionCardItem}>{description}</Text>
          )}
        </LinearGradient>
      </View>

      {/* MATCHES */}
      {/* {  matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )} */}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>

          <TouchableOpacity style={{...styles.button, ...tailwind('bg-red-300')}}>
            <Icon name="heart" color={WHITE} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.button, ...tailwind('bg-green-300')}}>
            <Icon name="chatbubble-ellipses" color={WHITE} size={25} />
          </TouchableOpacity>  

        </View>
      )}
    </View>
  );
};

export default ServiceProfileItem;
