import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DoneButton from '../Components/DoneButton';
import AppContext from '../AppContext';

const User = React.memo(
  () => {

    const [text, onChangeText] = useState(null);

    const { dispatchNameEvent } = useContext(AppContext);

    useEffect(() => {
      dispatchNameEvent('SET_COLOR', { color: 'white' });
      dispatchNameEvent('SET_USERNAME', { username: undefined });
    }, []);

    return (
      <>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type your github username"
            autoCapitalize='none'
          />
        </View>
        <DoneButton action={'SET_USERNAME'} payload={text} name={'username'} />
      </>
    );
  },
);

User.displayName = 'User';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 1
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: 17,
    fontFamily: 'OpenSans-Medium'
  },
});

export default User;
