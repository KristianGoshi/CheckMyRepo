import * as React from 'react';
import { useCallback, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

const CheckButton = React.memo(
  (props) => {

    const navigation = useNavigation();

    const { username, reponame } = useContext(AppContext);

    useEffect(() => {
    }, [props]);

    const checkAction = () => {
      return fetch('https://pushmore.io/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          repoUrl: username,
          sender: reponame
        }
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => checkAction()}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CHECK</Text>
      </TouchableOpacity>
    );
  },
);

CheckButton.displayName = 'CheckButton';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30
  }
});

export default CheckButton;
