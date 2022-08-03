import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackHeader = React.memo(
  (props) => {

    const navigation = useNavigation();

    useEffect(() => {

    }, []);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../back_icon/back.png')}
            style={{
              height: 15,
              width: 20
            }}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 30, fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
      </View>
    );
  },
);

BackHeader.displayName = 'BackHeader';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10
  }
});

export default BackHeader;