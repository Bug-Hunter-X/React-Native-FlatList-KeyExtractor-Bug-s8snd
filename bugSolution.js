// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  text: `Item ${i}`
}));

const App = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default App;