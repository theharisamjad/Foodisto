import React from "react";
import { StyleSheet, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { height, width } from "../constants/sizes";
import { fonts } from "../constants/fonts";
import { useTheme } from "../ThemeContext";
interface MenuItemCardProps {
  name: string;
  price: number;
  img: string;
  veg: boolean;
  onPress: () => void;
}

export default function MenuItemCard({
  name,
  price,
  img,
  veg,
  onPress,
}: MenuItemCardProps) {
  const { paperTheme } = useTheme();
  return (
    <Card
      style={[styles.card, { backgroundColor: paperTheme.colors.onBackground }]}
      onPress={onPress}
    >
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: img }} style={styles.image} />
        <Text numberOfLines={1} style={[styles.title]}>
          {name}
        </Text>
        <Text style={[styles.veg, { color: paperTheme.colors.onSurface }]}>
          {veg ? "Veg" : "Non-Veg"}
        </Text>
        <Text style={[styles.text, { color: paperTheme.colors.primary }]}>
          ${price}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    width: width * 0.6,
    height: height * 0.38,
  },
  cardContent: {
    paddingVertical: 0,
  },
  veg: {
    fontSize: scale(16),
    fontFamily: fonts.regular,
    alignSelf: "center",
    textAlign: "center",
  },
  title: {
    fontSize: scale(22),
    fontFamily: fonts.bold,
    marginBottom: verticalScale(5),
    alignSelf: "center",
    textAlign: "center",
    width: width * 0.5,
  },
  text: {
    fontSize: scale(32),
    fontFamily: fonts.bold,
    alignSelf: "center",
    textAlign: "center",
    marginTop: verticalScale(5),
  },
  image: {
    width: width * 0.6,
    height: height * 0.2,
    alignSelf: "center",
    marginBottom: verticalScale(10),
    resizeMode: "cover",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
