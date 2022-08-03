import * as React from 'react';
import { useCallback, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext'
import CheckButton from '../Components/CheckButton';

const Main = React.memo(
  () => {

    const navigation = useNavigation();

    const { username, reponame } = useContext(AppContext);

    useEffect(() => {
    }, [username, reponame]);

    return (
      <>
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Set the repository address</Text>
          <Text style={styles.text}>github.com</Text>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate("User")}>
            <Text style={styles.text}>/</Text>
            <Text style={[styles.text, {color: username ? 'black' : 'gray'}]}>{username || 'user'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("Repository")}>
            <Text style={styles.text}>/</Text>
            <Text style={[styles.text, { color: reponame ? 'black' : 'gray' }]}>{reponame || 'repo'}</Text>
          </TouchableOpacity>
        </View>
        <CheckButton />
      </>
    );
  },
);

Main.displayName = 'Main';

const styles = StyleSheet.create({
  container: {
    margin: 40
  },
  text: {
    fontSize: 30,
    marginBottom: 5
  }
});

export default Main;
