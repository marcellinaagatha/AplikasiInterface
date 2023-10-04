import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { Garis, Scanner } from '../../../assets';

const Saldo = () => {
  return (
    <View style={styles.scanContainer}>
      <Image source={Scanner} style={styles.scan} />
      <Image source={Garis} style={styles.scan} />
    </View>
  );
};

export default Saldo;

const styles = StyleSheet.create({
  scanContainer: {
    flexDirection: 'row',
  },
  scan: {
    width: 30,
    height: 30,
  },
});
