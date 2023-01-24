import  React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';


const persons = [
  {
	id: "1",
	name: " 6$     i21s998",
  },
  {
	id: "2",
	name: "Winston Orn",
  },
  {
	id: "3",
	name: "Carlton Collins",
  },
  {
	id: "4",
	name: "Malcolm Labadie",
  },
  {
	id: "5",
	name: "Michelle Dare",
  },
  {
	id: "6",
	name: "Carlton Zieme",
  },
  {
	id: "7",
	name: "Jessie Dickinson",
  },
  {
	id: "8",
	name: "Julian Gulgowski",
  },
  {
	id: "9",
	name: "Ellen Veum",
  },
  {
	id: "10",
	name: "Lorena Rice",
  },
	
  
];

export default function RatingScreen({navigation}) {
  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
      <SafeAreaView style={styles.container}>
    <FlatList
      data={persons}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          Топ пользователей
        </Text>
      )}
      
    />
  </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});