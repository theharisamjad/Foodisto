import { View, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, Text, TouchableRipple } from "react-native-paper";
import { fonts } from "../../constants/fonts";
import { scale } from "react-native-size-matters";
import pizzaData from "../../constants/menudata.json";
import { DessertData, PizzaData } from "../../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MenuItemCard from "../../components/MenuItemCard";
import { height, width } from "../../constants/sizes";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import dessertData from "../../constants/dessertsdata.json";
type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function Home({ navigation }: HomeProps) {
  const [data, setData] = useState<PizzaData | DessertData>(
    pizzaData as unknown as PizzaData
  );
  const categories = [
    { id: 1, name: "Pizza", icon: "pizza" },
    { id: 2, name: "Dessert", icon: "ice-cream" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(1);
  useEffect(() => {
    if (selectedCategory === 1) {
      setData(pizzaData as unknown as PizzaData);
    } else {
      setData(dessertData as unknown as DessertData);
    }
  }, [selectedCategory]);
  const paperTheme = useTheme();
  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Find your <Text style={styles.highlightedText}>Best Food</Text> here
        </Text>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.scrollView}
        >
          {categories.map((category) => (
            <Chip
              key={category.id.toString()}
              onPress={() => {
                setSelectedCategory(category.id);
              }}
              style={styles.chip}
              icon={category.icon}
              selectedColor={paperTheme.colors.primary}
            >
              {category.name}
            </Chip>
          ))}
        </ScrollView>
        <FlatList
          horizontal
          style={styles.flatListPadding}
          contentContainerStyle={styles.flatList}
          showsHorizontalScrollIndicator={false}
          data={data as any}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          renderItem={({ item }) => (
            <MenuItemCard
              name={item.name}
              price={item.price}
              category={selectedCategory}
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
    padding: scale(16),
  },
  header: {
    width: "100%",
  },
  headerText: {
    fontFamily: fonts.regular,
    fontSize: scale(20),
    width: width * 0.5,
    marginBottom: scale(16),
  },
  highlightedText: {
    fontFamily: fonts.bold,
  },
  scrollView: {
    flexDirection: "row",
    gap: scale(10),
    marginBottom: scale(16),
  },
  chip: {
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    gap: scale(16),
  },
  flatListPadding: {
    paddingVertical: scale(2),
  },
});
