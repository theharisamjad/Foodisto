// components/AnimatedTabBarIcon.tsx
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSpring,
  Easing,
} from "react-native-reanimated";

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

const AnimatedTabBarIcon = ({
  focused,
  iconName,
  color,
}: {
  focused: boolean;
  iconName: any;
  color: string;
}) => {
  const scale = useSharedValue(1); // Initial scale: 1
  const size = useSharedValue(24); // Initial size: 24

  const animatedStyle = useAnimatedStyle(() => ({
    fontSize: withTiming(size.value, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    }),
    transform: [
      {
        scale: withSpring(scale.value, {
          damping: 10, // Controls the bounciness
          stiffness: 100, // Controls the speed
        }),
      },
    ],
  }));

  React.useEffect(() => {
    size.value = focused ? 32 : 24; // Increase size when focused
  }, [focused]);

  return (
    <AnimatedIcon
      name={iconName as any}
      style={animatedStyle} // Apply animated style
      color={color}
    />
  );
};

export default AnimatedTabBarIcon;
