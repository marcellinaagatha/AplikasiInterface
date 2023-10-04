import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardVideo from '../CardVideo';

const ShoopeLive = () => {
  return (
    <View>
      <View style={styles.containerShoppeLive}>
        <Text style={{ color: '#fe5722' }}>SHOPPE LIVE</Text>
        <Text style={{ color: 'gray', fontSize: 10 }}>Lihat semua {'>'}</Text>
      </View>
      <View>
        <CardVideo />
      </View>
    </View>
  );
};

export default ShoopeLive;

const styles = StyleSheet.create({
  containerShoppeLive: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
