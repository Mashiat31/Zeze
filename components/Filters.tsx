import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import tailwind from "tailwind-rn";

const Filters = () => (
  <TouchableOpacity style={styles.filters}>
    <Text style={tailwind('uppercase text-xs tracking-wide font-semibold')}>
      <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
    </Text>
  </TouchableOpacity>
);

export default Filters;
