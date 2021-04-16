import React, { useState } from "react";
import { View, ImageBackground, Image } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem, Hire } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import tailwind from "tailwind-rn";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Image style={tailwind('w-10 h-10')} source={require('../assets/images/opaque.png')}/>
          <Filters />
          {/* <Hire /> */}
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                flavours={item.flavours}
                interests={item.interests}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
