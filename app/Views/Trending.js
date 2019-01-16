import React from "react";
import {View, ScrollView, Text, Linking, StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { trendingData } from "../mockData/trendingData";

const Trending = () => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.h1}>Trending</Text>
    {trendingData.map((item, i) => {
      return (
          <View key={item.index}>
            <Image style={styles.img} source={item.uri}/>
            <Text style={styles.h1}>{item.title}</Text>
            <View>
              <Text>{item.totalPoint}</Text>
              <Text>{item.content}</Text>
            </View>
          </View>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    padding: 10
  },
  h1: {
    fontSize: 22,
    alignSelf: "center",
    marginBottom: 20
  },
  img: {
    width: 350,
    height: 300,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#000"
  }
});

export default Trending;
