import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

const CheckButton = React.memo(
  () => {

    const { dispatchNameEvent } = useContext(AppContext);

    const { username, reponame } = useContext(AppContext);

    const navigation = useNavigation();

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
          if (response.status == '200') {
            navigation.navigate("Success");
          } else {
            dispatchNameEvent('SET_COLOR', { color: '#FAA0A0' });
          }
        })
        .catch((error) => {
          console.log(error);
          dispatchNameEvent('SET_COLOR', { color: '#FAA0A0' });
        });
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => checkAction()}>
        <Text style={styles.text}>CHECK</Text>
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
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  }
});

export default CheckButton;
