import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DoneButton from '../Components/DoneButton';

const Repository = React.memo(
  () => {

    const [text, onChangeText] = useState(null);

    return (
      <>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type your repository name"
            autoCapitalize='none'
          />
        </View>
        <DoneButton action={'ADD_REPONAME'} payload={text} name={'reponame'} />
      </>
    );
  },
);

Repository.displayName = 'Repository';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 10,
    fontSize: 17,
    fontFamily: 'OpenSans-Medium'
  },
});

export default Repository;
