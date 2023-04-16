import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

const user = {
  id: "u1",
  image:
    "https://avatars.githubusercontent.com/u/63661867?s=400&u=8831fd3cfb73bfa5b71de8ac21e4608c697b2460&v=4",
  name: "Ahmed Moussa",
};

const createPostScreen = () => {
  const [description, setDescription] = useState("");
  // const insets = useSafeAreaInsets();

  const onSubmit = () => {
    console.warn("Post Submitted", description);
    setDescription(" ");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      {/* Text Input */}
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="What is on your mind?"
        multiline
      />

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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 'auto',
  },
});

export default createPostScreen;
