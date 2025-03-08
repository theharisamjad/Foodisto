import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { fonts } from "../../constants/fonts";
import { sizes } from "../../constants/sizes";
import { scale } from "react-native-size-matters";
import pizzaData from "../../constants/menudata.json";
import { PizzaData } from "../../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MenuItemCard from "../../components/MenuItemCard";
import { useTheme } from "../../ThemeContext";
type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function Home({ navigation }: HomeProps) {
  const menu = { pizzas: pizzaData } as PizzaData;
  return (
    <View style={[styles.container]}>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={menu.pizzas}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          renderItem={({ item }) => (
            <MenuItemCard
              name={item.name}
              price={item.price}
              img={item.img}
              veg={item.veg}
              onPress={() =>
                navigation.navigate("FoodItemDetail", {
                  item,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: scale(16),
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e60023",
  },
  veg: {
    fontSize: 14,
    // color: item => (item.veg ? 'green' : 'red'),
  },
});
