import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CountDown from '../CountDown';
import Gap from '../Gap';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Gap width={10} />
      <CountDown />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 14,
  },
});
