import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputTextComment = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Введите сообщение"
        value={text}
        maxLength={30}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});

export default InputTextComment;