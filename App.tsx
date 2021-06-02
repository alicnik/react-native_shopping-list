import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import { Header, ListItem, AddItem } from './components';

const v4 = () => uuid.v4() as string;

export interface ItemInterface {
  id: string;
  text: string;
}

function App() {
  const [items, setItems] = React.useState<ItemInterface[]>([
    { id: v4(), text: 'Milk' },
    { id: v4(), text: 'Bread' },
    { id: v4(), text: 'Eggs' },
    { id: v4(), text: 'Juice' },
  ]);

  const handleAddItem = (text: string) => {
    setItems([{ id: v4(), text }, ...items]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onAdd={handleAddItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} onRemove={handleRemoveItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
