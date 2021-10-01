import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
//redux stuff
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "123",
    title: "get a ride",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMXiYJTWKiLp9wn9U1SITLu5bcwBGloFDJw&usqp=CAU",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "order food",
    image:
      "https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
