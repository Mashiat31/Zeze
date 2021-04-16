import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import Logo from "../assets/images/logo.png";



function LandingPage({ navigation }: any) {
    return(
        <View style={{...tailwind('flex-1 justify-center items-center'), backgroundColor: '#a076c3'}}>
             <Image style={tailwind('w-24 h-24')} source={require('../assets/images/solid.png')}/>
            {/* <Image source={Logo} style={{resizeMode: 'contain', ...tailwind('h-44 w-44 rounded-full')}} /> */}
            <Text style={{...tailwind('mt-4 font-black text-4xl w-56 text-center'), color: '#FFF'}}>Z E Z E </Text>
            <Text style={{...tailwind('mt-4 font-bold text-sm w-56 text-center'), color: '#FFF'}}>CONNECTING AND EMPOWERING MOTHERS EVERYWHERE. </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={{...tailwind('mt-20 rounded-full px-10 py-2 flex justify-center items-center'), backgroundColor: '#671b73', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,}}>
                <Text style={tailwind('text-white font-black text-lg')}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LandingPage