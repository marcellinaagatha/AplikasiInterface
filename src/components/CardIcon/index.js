import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Cart } from '../../../assets';

const CardIcon = () => {
  return (
    <View style={{ marginHorizontal: 30 }}>
      <Image source={Cart} style={styles.imageCard} />
      <Text>Gratis ongkir</Text>
    </View>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  imageCard: {
    width: 30,
    height: 30,
  },
});
