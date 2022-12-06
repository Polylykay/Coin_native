import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const InputTransferMoney = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Введите сумму для перевода"
        value={text}
        maxLength={30}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 330,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});

export default InputTransferMoney;