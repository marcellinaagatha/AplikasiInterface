import { StyleSheet, Image, View, Text } from 'react-native';
import LogoShoope from '../../../assets/LogoShoope.jpg';
import Cart from '../../../assets/Cart.png';
import User from '../../../assets/User.png';
import React from 'react';
import Gap from '../Gap';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoShoope} style={styles.icon} />
      <View style={{ flexDirection: 'row' }}>
        <Image source={Cart}  style={styles.iconly}/>
        <Gap width={0}/>
        <Image source={User}  style={styles.iconly}/>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fe5722',
    padding: 10,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  iconly: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
});
