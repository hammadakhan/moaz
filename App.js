/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList} from 'react-native';
import {Service} from './src/Config/Services';
import Search from './src/InputSearch/Input';
import List from './src/ListComponent/List';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    Service.get_users(setData);
  }, []);
  return (
    <View style={styles.container}>
      <Search />
      <FlatList data={data} renderItem={(item) => <List data={item} />} />

      {/* <StatusBar translucent /> */}
      {/* <Text>HELLO WORLD!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: 0,
  },
});

export default App;
