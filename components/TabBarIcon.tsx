import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";
import { TabBarIconT } from "../types";
import tailwind from "tailwind-rn";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <Icon name={iconName} size={20} color={iconFocused} />
      <Text style={{...tailwind('uppercase text-xs tracking-wide font-bold mt-1'), color: iconFocused}}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;
