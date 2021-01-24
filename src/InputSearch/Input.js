import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const App = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Search users.."
        leftIcon={<Icon name="search" size={24} color="black" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    right: 0,
  },
});

export default App;
