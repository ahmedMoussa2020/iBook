import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";

const Navigator = () => {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        {/* <Stack.Screen name="Feed" component={FeedScreen} /> */}
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
