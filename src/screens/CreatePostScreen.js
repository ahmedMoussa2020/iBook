import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {useNavigation} from "@react-navigation/native";

const user = {
  id: "u1",
  image:
    "https://avatars.githubusercontent.com/u/63661867?s=400&u=8831fd3cfb73bfa5b71de8ac21e4608c697b2460&v=4",
  name: "Ahmed Moussa",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  // const insets = useSafeAreaInsets();

  const onSubmit = () => {
    console.warn("Post Submitted", description);
    setDescription(" ");
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: 5 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      {/* Text Input */}
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="What is on your mind?"
        style={styles.input}
        multiline
      />

      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: " 100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 4/3,
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
  },
  input: {
    marginBottom: "auto",
  },
  buttonContainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
});

export default CreatePostScreen;
