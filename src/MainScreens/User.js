import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DoneButton from '../Components/DoneButton';

const User = React.memo(
  () => {

    const [text, onChangeText] = useState(null);

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
        <DoneButton action={'ADD_USERNAME'} payload={text} name={'username'} />
      </>
    );
  },
);

User.displayName = 'User';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 30
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
});

export default User;
