import * as React from 'react';
import { useEffect, useContext } from 'react';
import { StyleSheet, Text,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

const DoneButton = React.memo(
  (props) => {

    const navigation = useNavigation();

    const { dispatchNameEvent } = useContext(AppContext);

    useEffect(() => {
    }, [props]);

    const doneAction = () => {
      if (props.name === 'username') dispatchNameEvent(props.action, { username: props.payload });
      else dispatchNameEvent(props.action, { reponame: props.payload });
      navigation.goBack();
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => doneAction()}>
        <Text style={styles.text}>DONE</Text>
      </TouchableOpacity>
    );
  },
);

DoneButton.displayName = 'DoneButton';

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

export default DoneButton;
