import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements/dist/image/Image";
//redux stuff
import { selectTravelTimeInformation } from "../slices/navSlice";
import { useSelector } from "react-redux";

import tw from "tailwind-react-native-classnames";

//todo dev
const DUMMY_DATA = [
  {
    id: "uber-x-123",
    title: "uberX",
    multiplier: 1,
    image: "https://www.enter.co/wp-content/uploads/2014/11/UberX-660x432.jpg",
  },
  {
    id: "uber-x-456",
    title: "uberXX",
    multiplier: 1.2,
    image: "https://www.enter.co/wp-content/uploads/2014/11/UberX-660x432.jpg",
  },
  ,
  {
    id: "uber-x-789",
    title: "uberXXXX",
    multiplier: 1.75,
    image: "https://www.enter.co/wp-content/uploads/2014/11/UberX-660x432.jpg",
  },
];
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image } }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ url: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw`text-xl`}>
                {travelTimeInformation?.duration?.text} Travel time
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "PLN",
              }).format(
                travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier
              ) / 100}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Chose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
