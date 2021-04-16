import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import tailwind from "tailwind-rn";

const Hire= () => (
  <TouchableOpacity style={styles.hires}>
    <Text style={tailwind('text-center')}>
      <Icon name="cash" size={14} color={DARK_GRAY} /> Hire a Zeze
    </Text>
  </TouchableOpacity>
);

export default Hire;
