import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface AddItemProps {
  onAdd: (text: string) => void;
}

export function AddItem({ onAdd }: AddItemProps) {
  const [text, setText] = React.useState('');

  const handleChange = (value: string) => setText(value);

  const handlePress = () => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
      return;
    }
    onAdd(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        value={text}
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          <FontAwesome name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
