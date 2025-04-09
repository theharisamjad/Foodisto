import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, Text } from "react-native-paper";
import { fonts } from "../../constants/fonts";
import { scale } from "react-native-size-matters";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MenuItemCard from "../../components/MenuItemCard";
import { height, width } from "../../constants/sizes";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

import {
  useGetAllPizzasQuery,
  useGetAllDessertsQuery,
} from "../../services/homeService";
import { PizzaItem, DessertItem, FoodType } from "../../types/types";
type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function Home({ navigation }: HomeProps) {
  const categories = [
    { id: 1, name: "Pizza", icon: "pizza", type: FoodType.PIZZA },
    { id: 2, name: "Dessert", icon: "ice-cream", type: FoodType.DESSERT },
  ];

  const [data, setData] = useState<PizzaItem[] | DessertItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<FoodType>(
    FoodType.PIZZA
  );
  const paperTheme = useTheme();

  const {
    data: pizzas,
    isLoading: pizzasLoading,
    error: pizzasError,
  } = useGetAllPizzasQuery();
  const {
    data: desserts,
    isLoading: dessertsLoading,
    error: dessertsError,
  } = useGetAllDessertsQuery();

  useEffect(() => {
    if (selectedCategory === FoodType.PIZZA) {
      const pizzaData = pizzas ?? [];
      setData(pizzaData as PizzaItem[]);
    } else {
      const dessertData = desserts ?? [];
      setData(dessertData as DessertItem[]);
    }
  }, [selectedCategory, pizzas, desserts]);

  if (pizzasLoading || dessertsLoading) {
    return <ActivityIndicator />;
  }

  if (pizzasError || dessertsError) {
    return (
      <View style={styles.container}>
        <Text>Error loading pizzas. Please try again later.</Text>
      </View>
    );
  }

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
                setSelectedCategory(category.type);
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
              type={selectedCategory}
              img={item.img}
              veg={item.veg}
              onPress={() => {}}
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
