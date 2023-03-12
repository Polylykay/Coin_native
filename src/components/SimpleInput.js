import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const SimpleInput = ({value, setValue, placeholder}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        placeholder={placeholder}
        value={value}
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

export default SimpleInput;
