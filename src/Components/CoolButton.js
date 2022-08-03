import * as React from 'react';
import { useCallback, useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../AppContext';

const CoolButton = React.memo(
  () => {

    const navigation = useNavigation();

    const { dispatchNameEvent } = useContext(AppContext);

    const coolAction = () => {
      dispatchNameEvent('SET_COLOR', { color: '#90EE90' });
      navigation.goBack();
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => coolAction()}>
        <Text style={styles.text}>COOL</Text>
      </TouchableOpacity>
    );
  },
);

CoolButton.displayName = 'CoolButton';

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

export default CoolButton;
