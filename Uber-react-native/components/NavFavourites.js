import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";

import tw from "tailwind-react-native-classnames";

const dummy_data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    destination: "kopydlowo, Poland",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "work",
    destination: "kukurniki, Poland",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={dummy_data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
