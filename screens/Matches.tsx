import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import tailwind from "tailwind-rn";
import { LinearGradient } from "expo-linear-gradient";

const Matches = () => (
  <ImageBackground
    source={require("../assets/images/bg.png")}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={tailwind('font-semibold text-2xl')}><Image style={tailwind('w-8 h-8')} source={require('../assets/images/solid.png')}/>  Voices of ZEZE</Text>
     
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>
      <View style={tailwind('w-full flex-1 justify-between mt-8')}>
        <ScrollView>
        {
          [
            require('../assets/images/11.jpg'),
            require('../assets/images/12.jpg'),
            require('../assets/images/13.jpg'),
            require('../assets/images/14.jpg'),
            require('../assets/images/15.jpg'),
            require('../assets/images/16.jpg')].map(img => (
            <View style={{...tailwind('h-48 rounded-xl bg-white mx-2 mt-4'), elevation: 1,
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowColor: 'black',
            shadowOffset: { height: 0, width: 0 },}}>
          {/* <View style={tailwind('w-2/3')}>
            <Text>Amanda has uploaded a micro course on Being a new mom</Text>
          </View> */}
          <Image style={{...tailwind('h-full rounded-xl'), resizeMode: 'cover', width: 338}} source={img}/>
          <View style={{...tailwind('w-6 h-6 rounded-full justify-center items-center absolute top-3 left-3 bg-white'), shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6}}>
            <Icon name="lock-closed" color={'#000'} size={12} />
          </View>
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(0,0,0,0.75)']}
            style={{...tailwind('absolute bottom-0 w-full flex-row items-end'), height: 120, paddingBottom: 16, borderRadius: 10}}
          >
            <Text style={tailwind('w-3/5 text-white mx-4 font-medium')}>Amanda has uploaded a micro course on Being a new mom</Text>
            <View style={tailwind('w-2/5 justify-center flex-row items-center pr-6')}>
              <TouchableOpacity style={tailwind('bg-white rounded-full w-16 h-6 items-center justify-center')}>
                <Text style={tailwind('font-semibold')}>GET</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
          ))
        }
        </ScrollView>
      </View>
      {/* <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      /> */}
    </View>
  </ImageBackground>
);

export default Matches;
