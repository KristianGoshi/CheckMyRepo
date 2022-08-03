import * as React from 'react';
import { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext'
import CheckButton from '../Components/CheckButton';

const Main = React.memo(
  () => {

    const navigation = useNavigation();

    const { username, reponame, color } = useContext(AppContext);

    useEffect(() => {
    }, [username, reponame]);

    return (
      <>
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text style={styles.title}>Set the repository address</Text>
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
    padding: 40,
    flex: 1
  },
  text: {
    fontSize: 30,
    fontFamily: 'OpenSans-Medium',
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'OpenSans-Bold'
  }
});

export default Main;
