import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import tailwind from "tailwind-rn";

const City = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={tailwind('text-xs font-medium tracking-wide uppercase text-center')}>
      🇭🇰 HK
    </Text>
  </TouchableOpacity>
);

export default City;
