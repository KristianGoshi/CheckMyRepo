import * as React from 'react';
import { useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppContext from '../AppContext'
import CoolButton from '../Components/CoolButton';

const Success = React.memo(
  () => {

    const { username, reponame, color } = useContext(AppContext);

    useEffect(() => {
    }, [username, reponame]);

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>All done!</Text>
          <Text style={styles.text}>Repository sent.</Text>
        </View>
        <CoolButton />
      </>
    );
  },
);

Success.displayName = 'Success';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100
  },
  text: {
    fontSize: 35,
    fontFamily: 'OpenSans-Bold',
    marginBottom: 5,
    alignSelf: 'center'
  }
});

export default Success;
