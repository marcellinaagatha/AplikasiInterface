import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OpsiMenu = ({ Gambar, Title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardImageContainer}>
        <Image source={Gambar} style={styles.cardImage} />
      </View>
      <Text style={{ fontSize: 9, textAlign: 'center' }}>{Title}</Text>
    </View>
  );
};

export default OpsiMenu;

const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  cardImageContainer: {
    width: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 30,
    height: 30,
    marginVertical: 10,
  },
});
