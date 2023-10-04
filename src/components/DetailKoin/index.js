import { StyleSheet, Image, View, Text } from 'react-native';
import Gap from '../Gap';
import React from 'react';

const DetailKoin = ({ saldo, image, desc }) => {
  return (
    <View>
      <View style={styles.total}>
        <Image source={image} style={styles.imageUang} />
        <Gap width={4}/>
        <Text style={styles.uang}>{saldo}</Text>
      </View>
      <Text style={{ fontSize:10 }}>{desc}</Text>
    </View>
  );
};

export default DetailKoin;

const styles = StyleSheet.create({
  imageUang: {
    width: 20,
    height: 20,
  },
  total: {
    flexDirection: 'row',
  },
  uang: {
    fontSize: 12
  },
});
